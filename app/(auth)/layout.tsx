import React from 'react'
import Image from 'next/image';

import Logo from "../../public/assests/logo.svg";
import Footer from '../../components/app-reusables/Footer';


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-full">
      <section className="flex justify-center content-center w-full h-[82%] bg-background">
        <section className="flex justify-between items-center content-center m-auto w-[90%]">
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
          <section className="w-[57%] h-[80%]">{children}</section>
        </section>
      </section>
      <div className='h-1/6'>

      <Footer />
      </div>
    </main>
  );
};

export default layout