import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () =>{

  const onlineStatus=useOnlineStatus();

  return(
    <div className=" shadow-lg mb-2 bg-slate-300">

      <div className='flex justify-between' >
        <div className='w-28'>
          <img className='fit-contain '
          src = {LOGO_URL}/>
        </div>
         <div className="flex mr-5 ">
         <ul className="flex gap-10 pt-10 pb-3 ">
          <li>
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
             <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
         </ul>
        </div>
        </div>
      </div>
  
  )
  
}
export default Header;