import { Route, Routes } from "react-router-dom";
import { Products } from "../components/products/Products";
import { ProductDetail } from "../components/productdetails/Productdetails";
import Cart from "../components/cart/Cart";
import Billing from "../components/cart/Billing";
import { Payment } from "../components/payment/Payment";
import Register from '../components/pages/Register';
import {Navbar} from "../components/navbar/Navbar"
import {Home} from "../components/home/Home"
export const AllRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/billing" element={<Billing />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/login" element={<Register/>}/>
      </Routes>
    </>
  );
};
