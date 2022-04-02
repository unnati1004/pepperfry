import "./App.css";
import "./components/footer/Footer.css";
import Footer from "./components/footer/Footer.jsx";
import { Payment } from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
      <Payment />
      <Footer />
    </div>
  );
}

export default App;
