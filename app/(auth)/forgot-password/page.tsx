"use client"


import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import Logo from "../../../public/assests/logo.svg";

const Page = () => {
  const navigate = useRouter();

  const handleGoBack = () => {
    navigate.back();
  };
  return (
    <div className=" xl:grid grid-cols-2 flex items-center px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%] py-[50px] md:py-[30px] h-full">
      <div className="w-full md:w-[565px] mx-auto h-full">
        <div className="bg-white md:rounded-[32px] rounded-[24px]  p-[4%] md:p-[26px] shadow-xl h-full flex flex-col">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[20px] items-center">
            <div className="flex justify-start">
              <button
                onClick={handleGoBack}
                className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center"
              >
                <ChevronLeft
                  // className=" w-[9.5px]"
                  color="black"
                  size={20}
                />
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[63px] md:w-[80px]"
                width={63}
                height={80}
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <button className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center">
                  <X className="h-[16px] w-[16px]" color="black" size={30} />
                </button>
              </Link>
            </div>
          </div>
          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] text-[#44464A] md:leading-[30px] text-center md:text-start">
            Forgot password?
          </h4>
          <h4 className="text-[14px] md:text-[16px] font-[400] text-[#44464A] mt-[12px] text-center md:text-start">
            Enter email address to reset your password.
          </h4>
          <form className="mt-[40px] md:mt-[50px]   ">
            <div>
              <h4 className="text-[#535353]  font-[500] text-[12px] mb-[8px] ">
                Email address
              </h4>

              <input
                className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px] text-text"
                placeholder="Enter"
                type="email"
              />
            </div>
          </form>
          <div className="mt-auto">
            <button className="bg-tertiary w-full px-[20px] py-[12px] rounded-[32px] mt-[60px] md:mt-[50px] text-black text-[16px] md:text-[18px] font-[400] hover:bg-tertiaryHover">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
