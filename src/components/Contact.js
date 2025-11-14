const Contact=()=>{

    return(
        <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
        <form>
            Name<input type="text"
                    className="p-4 m-3 border border-l-amber-500"
                   / > 
            Message<input type="text"
                    className="border border-l-amber-500 p-4 m-4"
                   
                   / > 
                
        </form>
        
        </div>
    )
}

export default Contact