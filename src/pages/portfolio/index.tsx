
import SlideBar from "@/components/SlideBar";
import { Images, imgUrl } from "@/constants/imageConstants";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="container experience" id="portfolio">
        <div className="row justify-content-center">
          <p className="subTitle text-center">Recent Projects</p>
          <div className="col-xs-12 col-md-12 mt-5">
            <SlideBar Images={Images}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
