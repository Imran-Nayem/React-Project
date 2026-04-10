import { useState } from "react";

import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import StatsSection from "./component/StatsSection";
import Models from "./component/Models";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import { ToastContainer } from 'react-toastify';
import Pricing from "./component/Pricing";
import Steps from "./component/steps";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    
      <>
      <NavBar  cartCount={carts.length}/>
      <Banner/>
      <StatsSection/>
     <div className="text-center mt-10 mb 10">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p>One subscription gives you access to all frontier AI models</p>
      </div>

     <div className="flex justify-center gap-4 mt-6">

  <button
    onClick={() => setActiveTab("model")}
    className={`px-6 py-2 rounded-full font-medium transition-all duration-300
      ${
        activeTab === "model"
          ? "bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-lg"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
  >
    Models
  </button>

  <button
    onClick={() => setActiveTab("cart")}
    className={`px-6 py-2 rounded-full font-medium transition-all duration-300
      ${
        activeTab === "cart"
          ? "bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-lg"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
  >
    Cart ({carts.length})
  </button>

</div>



      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}
      <Steps/>
      <Pricing />
      <Footer/>
       <ToastContainer/>
      </>

      
  );
}

export default App;
