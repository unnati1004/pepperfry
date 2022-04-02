import { useContext } from "react"
import { CartContext } from "./Cart"
import "./Cart.css"

const Items = ({id,title,creator,price,img,quantity}) =>{

    const {removeItems,increment,decrement} = useContext(CartContext)

    return (
        <>
       
        
        <div className="Items">
           <div className="product-img">
               <img src={img} alt="err"/>
           </div>
           

           <div className="title">
               <h2>{title}</h2>
               <p>{creator}</p>
           </div>

           <div className="add-minus">
               <i className="fas fa-minus" onClick={()=>decrement(id)}></i>
               <input type="text" placeholder={quantity}/>
               <i className="fas fa-plus" onClick={()=>increment(id)}></i>

               <h3>₹ {price*quantity}</h3>
           </div>

           <div className="trash">
               <i className="fas fa-trash-alt" onClick={()=>removeItems(id)}></i>
               <i className="far fa-heart"></i>
           </div>
           
        </div>
        <hr />
        </>
    
    )
}

export default Items