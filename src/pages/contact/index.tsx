import BasicForm from "@/components/Form";
import { imgUrl } from "@/constants/imageConstants";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container experience" id="contact">
        <div className="row">
            <div className="col-xs-12 col-md-6 text-center" >
            <p className="subTitle mb-0">Get In Touch</p>
            <Image alt="contact" src={imgUrl.contact} data-aos="fade-up-right"/> 
            </div>
            <div className="col-xs-12 col-md-4" data-aos="fade-down-left" >
            <BasicForm/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
