import React from "react";
import splashscreenMobile from "/public/assests/splash-mobile.svg";
import splashscreenDesktop from "/public/assests/splash-desktop.svg";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-no-repeat z-10 w-full bg-cover bg-center h-screen  hidden md:block bg-desktop"
      
      >
        <Image src={splashscreenDesktop} alt="splash image" className="max"/>
      </div>
      <div
        className="bg-no-repeat z-10 w-full bg-cover bg-center h-screen md:hidden bg-mobile"
        
      >
        <Image src={splashscreenMobile} alt="splash image"/>

      </div>
    </div>
  );
};

export default SplashScreen;
