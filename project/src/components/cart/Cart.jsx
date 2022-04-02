import { createContext, useEffect, useReducer } from "react"
import "./Cart.css"
import { products } from "./products"
import Contextcart from "./Contextcart"
import { reducer } from "./reducer"



 export const CartContext = createContext();


 var product = JSON.parse(localStorage.getItem("product"));
//             item1.push(data);



 const init_state = {
     items:products,
     totalAmount:0,
     totalItem:0,
     carttotal:0,

 }

 const Cart=()=>{

    const [state,dispatch] = useReducer(reducer,init_state);

    const removeItems = (id) =>{
        return dispatch({
            type:"REMOVE_ITEMS",
            payload:id,

        })

    }

    const increment = (id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id,
        })
    }

    const decrement = (id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id,
        })
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTAL"})
        // console.log("ADitya")
    },[state.items])

    useEffect(()=>{
        dispatch({type:"CART_TOTAL"})
    },[state.items])

    // useEffect(()=>{
    //     dispatch({type:"TOTAL_AMOUNT"})
    // },[state.items])

    return (
        <>
        <CartContext.Provider value = {{...state,removeItems,increment,decrement}}>
            <Contextcart/>
        </CartContext.Provider>
        </>

    )
}

export default Cart