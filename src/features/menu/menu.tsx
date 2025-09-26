import { useDispatch,  } from "react-redux";
import { useGetMenuQuery } from "./restaurantSlice";
import { incrementByAmount } from "./paymentSlice";
import { useState } from "react";

const Menu =()=>{
    const [page,setPage] = useState<number>(1);
    const {data, isError, isSuccess, isLoading} = useGetMenuQuery({page:page,sortbyprice:"desc"});
    const dispatch = useDispatch();
    
  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return(
        <>
        <button onClick={()=>setPage(page+1)}>Next</button>
        <div style={{display:"flex", flexDirection:"row"}}>{
        data.map((item)=>(
            <div style={{ width: '20rem', padding: "30px", margin: "30px"}}>
              <div style={{fontWeight: "bold"}}>{item.itemName}</div>
              <img width = "400" height = "300" src = {item.imageUrl}/>
              <div>
                <div>Rs: {item.itemPrice}</div>
                <div style={{height:"40px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                    {item.itemDescription}
                </div>
              </div>
              <div>
                  <button  onClick={()=>dispatch(incrementByAmount(item.itemPrice))}>Buy</button>
              </div>
          </div>))
          }
          </div>
          </>
    )
}
    return null
}

export default Menu;