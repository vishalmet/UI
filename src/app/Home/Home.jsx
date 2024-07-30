import React from "react";
// import Wallet from "../../components/Wallet"
// import Connect from "../../components/Connect"
import Lottie from "lottie-react";
import Illustration from "../../../public/illustrations.json";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mx-auto bg-gradient-to-tr from-black to-gray-700">
      {/* <Connect />  */}
      <div className=" items-center space-y-6 ">
        {/* just for reference */}
        <div className="flex justify-center">
          <button className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 w-full hover:shadow-xl p-3 rounded text-xs md:text-base border-b-2 border-white">
            Connect Wallet
          </button>


        </div>
        <div className="w-full max-w-[800px] h-auto flex justify-center">
          <Lottie animationData={Illustration} loop={true} />
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 w-full hover:shadow-xl p-3 rounded text-xs md:text-base border-b-2 border-white">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
