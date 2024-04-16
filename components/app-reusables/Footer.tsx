import React from "react";
import  Link  from "next/link";
import copyright from "../assets/copyright.png";
import Image from "next/image";
import Icon from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="px-[4%]  py-[28px] md:py-[30px] bg-white">
        <div className=" pb-[12px] border-b-[1px] border-[#D9D9D9] md:w-[674px] mx-auto">
          <div className="flex justify-between md:w-[582px] mx-auto items-center">
            <Link href="/about">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                About
              </button>
            </Link>
            <Link href="/terms">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Terms of service
              </button>
            </Link>
            <Link href="/privacy-policy">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Privacy policy
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="text-[11px] md:text-[14px] text-text font-[400]">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[20px]">
          <div className="mr-[4px]">
        <Icon name="copyright"/>
          </div>
          <h4 className="text-[11px] text-text font-[400] ">
            2024 Honey bunny bun{" "}
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
