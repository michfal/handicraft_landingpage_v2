import Head from "next/head";

import { Navbar } from '../components/navbar/Navbar.component';
import { Hero } from '../components/sections/hero/Hero.component';
import { Offer } from '../components/sections/offer/offer.component';


export default function Home() {
  return (
    <>
      <Head>
        <title>Szmatki Kwiatki i Bukiety</title>
        <meta name="description" content="Generated by create next app" lang="pl"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Navbar />
          <Hero />
          <Offer />
          {/* <About />
          <Contact /> */}
      </main>
    </>
  );
}
