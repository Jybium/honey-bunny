import React from "react";
import splashscreenMobile from "@/public/assests/splash-mobile.svg";
import splashscreenDesktop from "@/public/assests/splash-desktop.svg";

const SplashScreen = () => {
  return (
    <div>
      <div
        className={`bg-no-repeat z-10 w-full bg-cover bg-center h-screen   relative hidden md:block`}
        style={{
          backgroundImage: `url(${splashscreenDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backdropFilter: "",
        }}
      ></div>
      <div
        className={`bg-no-repeat z-10 w-full bg-cover bg-center h-screen   relative md:hidden`}
        style={{
          backgroundImage: `url(${splashscreenMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backdropFilter: "",
        }}
      ></div>
    </div>
  );
};

export default SplashScreen;
