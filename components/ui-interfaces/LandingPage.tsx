"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "../app-reusables/SplashScreen";
import landingPage from "../../constants/landingPage";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assests/logo.svg";
import { Button } from "../ui/button";
import Footer from "../app-reusables/Footer";

const Landingpage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setText(1);
    }, 10000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main className="h-screen w-full">
      <section className="flex justify-center content-center w-full h-[75%] bg-background">
        <section className="flex justify-between items-center content-center h-[75%] m-auto w-[90%]">
          <div>
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              priority
              className="block max-w-full"
            />
          </div>
          <section className="w-3/5">
            <div className="text-white">
              <h1 className="font-medium text-6xl">
                {landingPage[text].heading}
              </h1>
              <p className="text-lg mt-2 mb-10">{landingPage[text].text}</p>
            </div>
            <div className="flex gap-6">
              <Button
                asChild
                className={`${
                  text === 1 ? "bg-base2 text-white" : "bg-white text-text border border-white"
                } rounded-full px-6 py-6 `}
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              <Button
                asChild
                className="rounded-full px-6 py-6 border border-white text-white"
              >
                <Link href="/sign-up" className="text-white">Log in</Link>
              </Button>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Landingpage;
