
import ResturantCategories from "./ResturantCategories";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu =()=>{
  const {resId} = useParams();

  const menu = useResturantMenu(resId);
  console.log(menu);


const {name,avgRating,areaName, costForTwoMessage,cuisines,totalRatingsString} = menu?.cards?.[2]?.card?.card?.info || {};

const categories =   menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                      (c)=>c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                    );
                   

    return(
        <div className="">
          <h1 className="text-4xl font-bold text-center  mt-10">{name}</h1>
           <div className=" p-5 m-auto mt-5 border-2 mx-50 shadow-xl  shadow-gray-600 rounded-3xl  border-gray-300 w-1/2">
           
            <h1 className="text-xl font-semibold">{avgRating} {costForTwoMessage}</h1>
            <h1 className="text-xl font-semibold">{areaName}</h1>
            <h1 className="text-xl font-semibold" >{cuisines?.join(",")}</h1>
            <h1 className="text-xl font-semibold">{totalRatingsString}</h1>
           </div>
           <h1 className="font-bold text-center">Menu</h1>
           {
            categories?.map((category)=><ResturantCategories  data={category?.card?.card}/>)
           }


        </div>
    )
}
export default ResturantMenu;

