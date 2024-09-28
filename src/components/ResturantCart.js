import { RESCART_IMG } from "../utils/constant";



const ResturantCart =({resData})=>{
  
    
    const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId } =
      resData?.info;
    return (
    <div>
    <div className=" cursor-pointer hover:bg-gray-300 w-[240px]  h-[350px] rounded-lg m-4 p-4 bg-zinc-300 border-2 border-gray-200 shadow-xl shadow-gray-300 overflow-hidden">
        <img alt=""
          className="rounded-md w-[200px] h-[160px] m-auto "
          src={  RESCART_IMG  
             +
            cloudinaryImageId
          }
        />
  
        <h4 className="font-bold  font-sons text-lg py-2 ">{name}</h4>
        <h4 className="text-md text-gray-800">{areaName}</h4>
        <h4 className="mt-1  text-gray-800">{cuisines.join(",")}</h4>
       <div className=" mt-1 text-gray-800 flex justify-between">
        <h4>{costForTwo}</h4> 
       <h4 className="mr-3">{avgRating} stars</h4>
       </div> 
  
      </div>


    </div>
    )
}
export default ResturantCart;