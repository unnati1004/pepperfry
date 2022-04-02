import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/billing" element={<Billing/>}/>
  </Routes>
  );
}

export default App;
