"use client";

import React, { useState } from "react";
import arrowLeft from "../../../public/assests/arrowLeft.svg";
import arrowRight from "../../../public/assests/arrowRight.svg";
import Logo from "../../../public/assests/logo.svg";

import terms from "../../../constants/termOfUse";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/app-reusables/Footer";

const Screen = () => {
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === terms[activeHeadingIndex].slides.length - 1) {
        if (activeHeadingIndex === terms.length - 1) {
          return prevIndex;
        } else {
          setActiveHeadingIndex((prevIndex) => prevIndex + 1);
          return 0;
        }
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === 0 && activeHeadingIndex === 0) {
        return prevIndex;
      } else if (prevIndex === 0) {
        setActiveHeadingIndex((prevIndex) => prevIndex - 1);
        // Fixed potential issue with accessing activeHeadingIndex immediately after setting it
        return terms[activeHeadingIndex - 1].slides.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleHeadingClick = (index: number) => {
    setActiveHeadingIndex(index);
    setActiveSlideIndex(0); // Resets slide index to show the first slide of the new heading
  };

  const isPreviousButtonVisible =
    activeHeadingIndex !== 0 || activeSlideIndex !== 0;
  const isNextButtonVisible =
    activeHeadingIndex !== terms.length - 1 ||
    activeSlideIndex !== terms[activeHeadingIndex].slides.length - 1;

  return (
    <main className="md:h-screen w-full ">
      <section className="px-[4%] md:px-[4%] lg:px-[4%]  2xl:px-[6%]  pt-[50px] md:py-[20px] bg-base h-[86%}">
        <div className="md:pb-[0px] pb-[20px] bg-base">
          <Image
            className="md:w-[86px] w-[150px] mx-auto md:mx-[0px]"
            width={63}
            height={80}
            src={Logo}
            alt="logo"
          />
        </div>
     
          <section className="lg:flex grid justify-between items-start content-center mx-auto w-[90%] lg:max-h-[704px] min-h-[704px] gap-[32px] lg:gap-0 lg:gap-x-8 bg-background">
            <div className="lg:w-[681px]">
              <div className="pb-[20px] md:pb-[40px] mb-[24px] md:mb-[30px] border-b-[1px] border-white">
                <h4 className="text-[32px] md:text-[64px] md:lading-[81px] font-[500] text-white">
                  Terms of service
                </h4>
                <h4 className="text-[15px] font-[400] leaing-[22.5px] text-white mt-[16px] md:mt-[32px] md:text-[18px]">
                  At Honey Bunny Bun, we highly value your privacy and trust.
                  It's crucial for us to be transparent about our practices
                  regarding the collection, usage, and disclosure of your
                  information.
                </h4>
              </div>
              <div className="border-b-[1px] lg:border-b-[0px] border-white pb-[10px] ">
                {terms.map((heading, index) => (
                  <div key={index}>
                    <ul
                      className={`tex-[16px] font-[700] ml-[20px] w-fit mb-[16px] md:mb-[32px] ${
                        activeHeadingIndex === index
                          ? "text-tertiary border-b-[1px] border-tertiary"
                          : "text-white"
                      } cursor-pointer list-disc`}
                      onClick={() => handleHeadingClick(index)}
                    >
                      <li>{heading.title}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rgba-6ab5d2-16 px-[24px] py-[25px] rounded-[24px] h-full flex flex-col overflow-x-scroll lg:w-[767px] lg:h-[704px] w-full">
              {terms.map((terms, index) => (
                <div key={index}>
                  <div>
                    <div
                      className={
                        activeHeadingIndex === index
                          ? `border-b-[1px] border-line pb-[17px] mb-[17px]`
                          : "hidden"
                      }
                    >
                      <h4 className="text-white text-[22px] md:text-[24px] font-[700] leading-[28px] md:leading-[30.6px]">
                        {terms.title}
                      </h4>
                      <h4 className="text-white text-[16px] md:text-[18px] md:leading-[27px] font-[400] mt-[16px]">
                        {terms.description}
                      </h4>
                    </div>
                    {activeHeadingIndex === index &&
                      terms.slides.map((slide, slideIndex) => (
                        <div key={slideIndex}>
                          {activeSlideIndex === slideIndex &&
                            slide.sections.map((section, sectionIndex) => (
                              <div className="pb-[12px]" key={sectionIndex}>
                                <div className="flex">
                                  <div className="w-[15px] flex justify-end mr-[10px]">
                                    <h4 className=" text-[14px] font-[400] text-white leading-[21px]">
                                      {section.number}.
                                    </h4>
                                  </div>
                                  <div className="w-full">
                                    <h3 className="text-[14px] font-[400] text-white leading-[21px]">
                                      {section.title}
                                    </h3>
                                    {section.texts.map((text, textIndex) => (
                                      <ul
                                        className="list-disc mt-[10px] text-white font-[400] text-[14px] leading-[21px] -ml-[10px] md:ml-[20px]"
                                        key={textIndex}
                                      >
                                        <li>{text}</li>
                                      </ul>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
              <div className="mt-auto md:flex flex-row items-center  justify-between pt-[17px] border-t-[1px] border-line">
                {/* <div className="order-2 flex justify-center items-center gap-[24px]">
                  <Button
                    size="sm"
                    onClick={handlePrevSlide}
                    className="backdrop-blur-sm p-2 rounded bg-buttonbg"
                  >
                    <Image
                      src={arrowLeft}
                      width={13.21}
                      height={21}
                      alt="arrow left"
                    />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleNextSlide}
                    className="backdrop-blur-sm p-2 rounded bg-buttonbg"
                  >
                    <Image
                      src={arrowRight}
                      width={13.21}
                      height={21}
                      alt="arrow Right"
                    />
                  </Button>
                </div> */}
                <div className="order-1 mt-[20px] md:mt-[0px]">
                  <h4 className="text-white font-[400] text-[12px] text-center">
                    Last updated: November 2021
                  </h4>
                </div>
              </div>
            </div>
          </section>
       
      </section>
      <div className="md:h-fit h-fit">
        <Footer />
      </div>
    </main>
  );
};

export default Screen;
