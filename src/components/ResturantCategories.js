import { useState } from "react";
import ItemList from "./ItemList.";

const ResturantCategories =({data})=>{

    const[isShowText , setIsShowText] = useState(true);
    
const showTextBtn = ()=>{
    setIsShowText(!isShowText);

}
    return(
        <div className="">
            <h1 
            onClick={showTextBtn}
             className=" cursor-pointer mb-5 font-bold text-3xl text-center ">{data.title} ({data?.itemCards?.length})</h1>

             {isShowText && <ItemList  items={data.itemCards}/>}
               {/* {
                data.itemCards.map((item)=>
                <ItemList name={item.card.info.name}  price={item.card.info.price} imageId={item.card.info.imageId}/>)
               } */}
        </div>
    )
}
export default ResturantCategories;
{/* <div>{item.card.info.name}</div> */}