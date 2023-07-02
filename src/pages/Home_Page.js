//import piu_tgt from "/images/piu_tgt.png";
import Navigation from "../components/Navigation";
import React, {useState} from 'react';
//const piu_tgt ='../../public/images/piu_tgt.png'
const piu_tgt = `${process.env.PUBLIC_URL}/images/piu_tgt.png`;

function Home() {
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(true);
  };
  return (
    <div className="min-h-screen text-white bg-background-color">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="container flex flex-col items-center px-4 py-2 mx-auto my-24 md:flex-row">
        <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
          <img
            src={piu_tgt}
            alt="Image 1"
            className="h-auto mb-4 transition-transform duration-300 ease-in-out transform rounded-lg w-100 md:mb-0 hover:scale-105"
            style={{ filter: "brightness(1)" }}
            onMouseEnter={(e) => {
              e.target.style.filter = "brightness(0.75)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "brightness(1)";
            }}
          />
        </div>
        <div className="w-full pl-0 mt-8 md:w-1/2 md:pl-8 md:mt-0">
          <h1 className="text-5xl font-bold text-white my-7">
            Elevate Your University Experience
          </h1>
            <p className={`text-3xl text-description-color bg-background-text mr-16 p-7 rounded-2xl`}>
              Do you find navigating through the student handbook to be a hassle? 
              Our bot is here to ease that process for you!
            </p>
            <button 
              onClick={handleButtonClick}
              className="px-6 py-3 mt-6 text-xl font-bold text-white transition duration-300 ease-in-out transform rounded-lg bg-button-color font-Lato hover:bg-purple-600 hover:text-white hover:scale-105">
              Add to server
            </button>
        </div>      
      </section>
    </div>
  );
}

export default Home;
