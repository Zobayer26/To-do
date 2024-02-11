import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <div className=" flex items-center min-h-screen bg-gradient-to-r from-[#153677] to-[#4e085f]">
      <div className="py-2 flex flex-col gap-4 w-[500px] min-h-[500px] rounded mx-auto bg-white ">
       <Header/>
      </div>
    </div>
  );
};

export default Home;
