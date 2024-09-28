import { useDispatch } from "react-redux";
import { RESCART_IMG } from "../utils/constant";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({items})=>{


  const dispatch = useDispatch();


  const handleAddItem =(item)=>{
// dispatch an action
     dispatch(addItem(item));
   
  }
  const handleRemove = ()=>{
 dispatch(removeItem())
  }
   
    return (
        <div className="w-[70%] mt-20 font-medium  m-auto">
          {
            items.map((item)=>
            <div className="flex p-7 border-gray-300 mt-10 justify-between border-b-2">
                <div className="text-gray-700 ">
                <p className="text-3xl m-2">{item.card.info.name}</p>
                <p className="m-2">rs{item.card.info.price/100}</p>
                <p className="m-2">{item.card.info.description}</p>
                </div>

                <div className="border-5 border-gray-800"> 
                <img className="w-[150px]   rounded-lg" src={RESCART_IMG + item.card.info.imageId}/>
                <button onClick={() => handleRemove()} className=" absolute m-auto p-2  rounded-xl bg-black hover:bg-gray-400 shadow-sm shadow-gray-200 px-2 text-white w-20 mx-50 -mt-10">remove -</button>
                <button onClick={() => handleAddItem(item)} className=" absolute m-auto p-2  rounded-xl bg-black hover:bg-gray-400 shadow-sm shadow-gray-200 px-2 text-white w-20 mx-10 -mt-10">ADD +</button>
                </div>
            </div>
            )
          } 

        </div>
    )
}
export default ItemList;