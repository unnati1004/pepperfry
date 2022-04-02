import { Route, Routes } from "react-router-dom";
import { Products } from "../components/products/Products";
import { ProductDetail } from "../components/productdetails/Productdetails";
import Cart from "../components/cart/Cart";
import Billing from "../components/cart/Billing";
import { Payment } from "../components/payment/Payment";
// import Signup from './components/signup/Signup';
export const AllRoutes = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/armschair" element={<Products />} />
        <Route exact path="/armschair/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/billing" element={<Billing />} />
        <Route exact path="/payment" element={<Payment />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
};
