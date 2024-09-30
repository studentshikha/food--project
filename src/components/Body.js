import { useEffect, useRef, useState } from "react";
import ResturantCart from "./ResturantCart";
import { Link } from "react-router-dom";




const Body=()=>{
  const [listOfResturant , setListOfResturant] = useState([]);
  // copy listofresturants in this filteredres variable
  const [filteredRes, setFilteredRes] = useState([])
  const searchText = useRef(null);
 
 
useEffect(()=>{
  showResturantsCart()
  },[])

 
const showResturantsCart =async ()=>{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 const json = await data.json();

 setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
 }

return (
    <div>
      <div className="flex justify-between">
      <div className="mt-5 px-20 ">
        <input
          className="w-[300px] border-gray-300 h-10  p-5  shadow-lg shadow-gray-800 rounded-lg"
         ref={searchText} type="text" placeholder="search"/>
        <button
        className=" ml-3 shadow-md  shadow-gray-600 bg-gray-300 p-2 rounded-md " 
        onClick={()=>{
        setFilteredRes(listOfResturant.filter((res)=>res?.info?.name.toLowerCase().
        includes(searchText.current.value.toLowerCase())))
        }}
        >search</button>
      </div>
      <div>
        <button 
        className="m-5 rounded-md border-spacing-3  grid-cols-3 bg-gray-500 mr-20 p-3 font-normal text-white text-sm"
        onClick={()=>{
          setFilteredRes(listOfResturant?.filter((resturant)=>resturant?.info?.avgRating>4.5))
          
        }}
        >Top Rated Resturants
        </button>
        
      </div>
      </div>
     
      <div className = "flex mx-10 flex-wrap m-auto">
      {  filteredRes?.map((resturant)=>  
       <Link to={"/resturantMenu/"+ resturant?.info?.id }>
      <ResturantCart  key={ resturant.info.id} resData= {resturant }/>
      </Link>
     ) }
    
      </div>

   
    </div>
)
}

export default Body;