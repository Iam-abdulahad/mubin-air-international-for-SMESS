import React from "react";
import backgroundImage from "../assets/Images/BG/bg-sky.jpg";
import welder from "../assets/Images/Banner/welder.jpg";
import engrs from "../assets/Images/Banner/engrs.jpg";
import fuelField from "../assets/Images/Banner/fuel-filter.jpg";
import travels from "../assets/Images/Banner/travels.jpg";
import logo1 from "../assets/Images/Logo/logo1.png";
import logo2 from "../assets/Images/Logo/logo2.png";

const PageOne = () => {
  return (
    <div className=" container mx-auto min-h-screen flex justify-center items-center font-sans">
      <section
        className="py-[50px] px-[40px] bg-transparent relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header Section */}
        <div className="flex items-end mb-[25px]">
          <div className="w-[60px] mr-[15px] mb-[5px]">
            <img src={logo1} alt="MAT Logo" className="w-full h-auto" />
          </div>
          <h1 className=" text-[39px] font-bold leading-[1.1]">
            Mubin Air International Ltd.
          </h1>
          <p className="text-[0.9em]  mb-[-25px] ml-[-329px] font-semibold">
            Govt. Approved Recruiting License No. RL-1567
          </p>
        </div>

        {/* REMOVED HR LINE - No more black border! */}

        {/* Training Center Section */}
        <div className="flex items-center mb-[40px]">
          <div className="w-[40px] mr-[15px]">
            <img src={logo2} alt="MITTC Logo" className="w-full h-auto" />
          </div>
          <h2 className="text-[1.6em] font-semibold">
            Mubin Technical Training & Testing Center
          </h2>
        </div>

        {/* Image Grid Section */}
        {/* Image Grid Section */}
        <div className="grid grid-cols-2">
          {/* Image 1 */}
          <div className="h-[1px] my-[10px] mb-[20px] w-[90%] overflow-hidden h-[250px] w-[250px] right-0 rounded-[0px_60px_0px_60px] border-[12px] border-blue-500 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/30">
            <img
              src={engrs}
              alt="Industrial Worker Checking Pipe"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden h-[250px] w-[250px] rounded-[60px_0px_60px_0px] border-[12px] border-red-500 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/30">
            <img
              src={welder}
              alt="Electricians Working on Panel"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden h-[250px] w-[250px] relative rounded-[60px_0px_60px_0px] border-[12px] border-green-500 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/30">
            <img
              src={fuelField}
              alt="Oil Refinery/Plant"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden h-[320px] w-[320px] relative backdrop-blur-md bg-white/5 rounded-[0px_60px_0px_60px] border-[12px] border-purple-500 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/30">
            <img
              src={travels}
              alt="Globe with Luggage and Passport"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default PageOne;
