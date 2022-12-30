import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import "../styles/Home.module.css";

const image = {
  url: require("../assets/images/1-dark@tinypng.a99d6c93.png"),
};

function Index() {
  return (
    <div className="flex-1 h-screen w-screen text-sm relative">
      <div className="absolute top-1/4 w-full overflow-hidden">
        <Image src={image.url} alt="" className="resize" />
      </div>

      <Navigation />

      <div className="h-4/6 w-full pt-40 relative z-10">
        <h1 className="text-2xl w-3/5 text-center mx-auto sm:w-2/5 lg:text-5xl lg:w-2/5 lg:leading-tight lg:mx-auto lg:text-center">
          Hire vetted teams to build your big ideas
        </h1>
        <p className="mx-auto w-4/5 text-center mt-6 leading-relaxed text-gray-500 text-sm sm:w-2/5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nisi
          expedita ad sapiente asperiores quas, ut illo incidunt unde velit!
        </p>

        <div className="w-fit mx-auto mt-8" id="jumbotron">
          <Button label="Get started today" />
        </div>
      </div>

      {/* <div className="h-4/6 w-4/5 mx-auto lg:mt-24">
        <h2 className="text-xl text-center lg:text-2xl">
          Enjoy a <span className="text-purple-700">seamless</span> trading experience{" "}
        </h2>
        <p className="mt-4 text-gray-500 text-center w-4/5 mx-auto">See how your customers would use Thepeer on your application</p>

        <div className=""></div>
      </div> */}
    </div>
  );
}

export default Index;
