import { Route,Routes } from "react-router-dom";
import {Products} from "../components/products/Products"
export const AllRoutes = ()=>{
    return(
        <>
          {/* <Navbar/> */}
          <Routes>
              <Route exact path="/armschair" element={<Products/>}/>
              <Route exact path="/armschair/:id" element={<Products/>}/>
          </Routes>
        </>
    )
}
