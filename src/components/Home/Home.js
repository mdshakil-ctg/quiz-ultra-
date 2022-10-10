import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Home.css'

const Home = () => {
  const quizData = useLoaderData();
  console.log(quizData);
  return (
    <div>
      <div className="home-header p-36 ">
      <h1 className="text-4xl font-bold mb-2 text-white">BeSmart ! <br></br> Multi-Tasking Multistep Form Quiz</h1>
      <p className="text-gray-100 mt-4">Wizard Form is a pixel perfect multistep form. It was designed to promote your  <br></br>mobile App, services or business projects</p>
      </div>
      <div className="grid grid-cols-3 p-36">
      {
        quizData.data.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
      }
      </div>
    </div>
    
    
  );
};

export default Home;
