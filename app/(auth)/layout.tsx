import React from 'react'
import Image from 'next/image';

import Logo from "../../public/assests/logo.svg";
import Footer from '../../components/app-reusables/Footer';


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="md:h-screen h-screen w-full max-w-[1728px] max-h-[1117px]">
      <section className="sm:grid lg:flex items-center content-center w-full lg:h-[88%] h-[88%] bg-background">
        <section className="lg:flex justify-between items-center content-center lg:h-full h-[88%] m-auto w-[90%]">
          <div>
            <Image
              src={Logo}
              alt="logo"
              width={500}
              height={500}
              priority
              className="lg:block hidden max-w-full"
            />
          </div>
          <section className="lg:w-[565px] sm:w-full lg:h-[80%] h-full content-center grid">{children}</section>
        </section>
      </section>
      <div className='md:h-fit h-fit'>
      <Footer />
      </div>
    </main>
  );
};

export default layout