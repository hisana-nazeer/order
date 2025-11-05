export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const restaurantId = searchParams.get("id") || "359059"; // default fallback ID

  const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.876263999999999&lng=76.6218787&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    const text = await response.text(); // Read as text first

    // Detect if Swiggy returned HTML instead of JSON
    if (text.trim().startsWith("<!DOCTYPE html>") || text.trim().startsWith("<html")) {
      console.error("Swiggy returned HTML instead of JSON");
      return new Response(
        JSON.stringify({
          error: "Received HTML response from Swiggy (likely blocked or redirected)",
          preview: text.slice(0, 200),
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // Try parsing JSON safely
    let json;
    try {
      json = JSON.parse(text);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      return new Response(
        JSON.stringify({
          error: "Invalid JSON from Swiggy",
          preview: text.slice(0, 200),
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(json), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching Swiggy data:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
