"use client";


import React, { useEffect, useState } from "react";
import SplashScreen from "../app-reusables/SplashScreen";
import landingPage from "@/constants/landingPage"


import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assests/logo.svg";
import { Button } from "../ui/button";


const Landingpage = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [text, setText] = useState<number>(0)


    useEffect(()=>{
        setTimeout(() => {
            setLoading((prev) => !prev)
        }, 4000);
    })


    useEffect(()=>{
        setTimeout(() => {
           setText(1)
        }, 4000);
    })

    if(loading){
        return <SplashScreen/>
    }



  return (
    <main className="bg-base flex justify-between items-center content-center ">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <section>
        <div>
            <h1 className="font-medium text-6xl">{landingPage[text].heading}</h1>
            <p className="text-lg mt-2 mb-5">{landingPage[text].text}</p>

        </div>
        <div>
          <Button asChild>
            <Link href="/sign-up" className={`${text === 2 ? "bg-base2" : "bg-transparent"}`}>Sign Up</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Log in</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Landingpage;
