import React from "react";
import splashscreenMobile from "/public/assests/splash-mobile.svg";
import splashscreenDesktop from "/public/assests/splash-desktop.svg";
import splashscreen from "/public/assests/splashscreen.png";
import Image from "next/image";

const SplashScreen = () => {
  return (
 
      <div
        className="image-container"
        
      >
        <Image src={splashscreen} alt="splash image" className="h-full w-full block" layout="fill"/>

      </div>
  );
};

export default SplashScreen;
