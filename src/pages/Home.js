import React from "react";
import Header from "../component/Header";
import Weather from "../component/Weather";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-[800px] mx-auto px-4">
        <Weather />
      </div>
    </div>
  );
};

export default Home;
