import Head from "next/head";
import Header from "@/layout/header";
import PersonalDetails from "./home";
import "animate.css";
import Technology from "./technology";
import "../styles/Technology.module.css";
import Experience from "./experience";
import Portfolio from "./portfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./contact";
import SocialDeatails from "./SocialDeatails";

import { useEffect } from "react";
import AOS from "aos";
import { meta } from "@/constants/imageConstants";
import { IMeta } from "@/types";
export default function Index() {
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <>
      <Head>
        <title className="subtitle animate__animated animate__bounce">
          SHUBHAM SAVNER
        </title>
        <meta name="description" content="This is my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`${meta.metaImage}`}/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head>

      <Header />
      <PersonalDetails />
      <Technology />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialDeatails />
      {/* <EmailForm/> */}
    </>
  );
}
