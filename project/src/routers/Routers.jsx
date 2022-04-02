import { Route,Routes } from "react-router-dom";
import {Products} from "../components/products/Products";
import {ProductDetail} from "../components/productdetails/Productdetails";

export const AllRoutes = ()=>{
    return(
        <>
          {/* <Navbar/> */}
          <Routes>
              <Route exact path="/armschair" element={<Products/>}/>
              <Route exact path="/armschair/:id" element={<ProductDetail/>}/>
          </Routes>
        </>
    )
}
