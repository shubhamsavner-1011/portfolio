import Head from "next/head";
import Header from "@/layout/header";
import PersonalDetails from "./home";
import "animate.css";
import Technology from "./technology";
import "../styles/Technology.module.css";
import Experience from "./experience";

export default function Index() {
  return (
    <>
      <Head>
        <title className="subtitle animate__animated animate__bounce">
          SHUBHAM SAVNER
        </title>
        <meta name="description" content="This is my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head>

      <Header />
      <PersonalDetails />
      <Technology />
      <Experience/> 
    </>
  );
}
