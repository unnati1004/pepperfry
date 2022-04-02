import { Route,Routes } from "react-router-dom";
import {Products} from "../components/products/Products";
import {ProductDetail} from "../components/productdetails/Productdetails";
import Cart from "../components/cart/Cart"
import Billing from "../components/cart/Billing"
export const AllRoutes = ()=>{
    return(
        <>
          {/* <Navbar/> */}
          <Routes>
              <Route exact path="/armschair" element={<Products/>}/>
              <Route exact path="/armschair/:id" element={<ProductDetail/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/billing" element={<Billing/>}/>
        
          </Routes>
        </>
    )
}
