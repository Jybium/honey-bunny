import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const Page = () => {
  return (
    <div className="bg-primary h-[calc(100vh-129.3px)] md:h-[calc(100vh-146.3px)] overflow-y-auto lg:flex items-center justify-center">
      <div className=" xl:block flex items-center px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%]  py-[50px] ">
        <div className="lg:flex items-center gap-[12%]">
          <div className="lg:w-[40%] w-[80%] mx-auto">
            <img className="w-[65%] md:w-[40%] lg:w-full mx-auto" src={logo} />
          </div>
          <div className="mt-[20px] lg:mt-[0px] lg:w-[60%]">
            <div className=" md:h-fit flex flex-col justify-end lg:w-[92%]">
              <h4 className="text-[32px] font-[500] text-white md:leading-[81px] md:text-[64px] md:font-[500]">
                About us
              </h4>
              <h4 className="text-[15px] font-[400] text-white leading-[22.5px] mt-[16px] md:mt-[32px] mb-[20px] md:mb-[40px] md:text-[18px] md:font-[400] md:leading-[27px]">
                Honey Bunny Bun is an adult subscription platform that empowers
                creators to unleash their full potential, monetize their
                content, and foster genuine connections with their audience.
              </h4>
              <div className="py-[24px] md:py-[40px] border-y-[1px] border-white">
                <h4 className="text-[24px] font-[500] leading-[36px] text-white md:text-[32px] md:font-[500] md:leading-[48px]">
                  “At the core of our platform lies our dedication to our
                  creator community, prioritizing their needs and aspirations
                  above all else.”
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
