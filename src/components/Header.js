import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header =()=>{
    const [isBtnLogin, setIsBtnLogin] = useState(true);

     const cartItems = useSelector((store) => store.cart.items);
    

    return (
        <div className="flex justify-between sticky top-0 bg-green-100 shadow-xl z-10">
            <div>
                <img className="w-[130px]" src= {LOGO_URL}
                alt="logo"/>  
            </div>
            <div>
                <ul className="flex  ">
        
                    <Link to="/"> <li className=" hover:text-orange-600 p-8">Home</li></Link>
                    <Link to="/about"> <li className="p-8 hover:text-orange-600">About</li></Link>
                    <Link to="/Contact"> <li className=" hover:text-orange-600 p-8">Contact</li></Link>
                    <Link to="/Cart"><li className="p-8 hover:text-orange-600 font-bold ">Cart ({cartItems.length}items)</li></Link>
                    <button
                     onClick={()=> setIsBtnLogin(!isBtnLogin)
                     }
                    className="p-5">{isBtnLogin? "Login" : "Logout"}</button>

                </ul>
            </div>


        </div>
    )
}



export  default Header;




// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"