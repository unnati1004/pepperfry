


 //import Footer from './components/footer/Footer.jsx';


 import React, {useEffect} from "react";
 // import './App.css';
 import {
   BrowserRouter,
  Switch,
   Route,
 } from "react-router-dom";
import Home from "./components/home/Home";
 import Login from "./components/pages/Login";
 import Register from "./components/pages/Register";
 import UserRoute from './components/UserRoute';
 import {useDispatch} from 'react-redux';
 import {auth} from './firebase';
 import {setUser} from './components/redux/actions';
 
 function App() {
   const dispatch = useDispatch();
 
   useEffect(() => {
 auth.onAuthStateChanged((authUser) =>{
   if(authUser){
     dispatch(setUser(authUser));
   }else{
     dispatch(setUser(null));
   }
 });
   }, [dispatch]);
   return (
    
  <div className="App">
 
<Register />
{/* <Login /> */}
 {/* <Switch>
   <UserRoute path="/" component={Home}/> 
   <Route path="/login" component={<Login />}/>
   < exact path="/register" component={<Register />}/>
 </Switch>
        */}
     </div>
     
    
   );
 }
 
 export default App;
