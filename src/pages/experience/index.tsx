import { imgUrl } from "@/constants/imageConstants";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="container experience">
        <div className="row justify-content-center">
        <p className="subTitle">Experience</p>
          <div className="col-xs-6 col-md-2 mt-5" data-aos="fade-up-right">
            <div className="exe">
              <Image src={imgUrl.circle} alt="circle" />
              <p className="count">1+</p>
            </div>
            <p className="text-center year">
              {" "}
              Years <br />
              <span style={{ color: "orange" }}>Experience</span>{" "}
            </p>
          </div>
          <div className="col-xs-6 col-md-2 mt-5" data-aos="fade-down-left">
            <div className="exe">
              <Image src={imgUrl.circle} alt="circle" />
              <p className="count">10+</p>
            </div>
            <p className="text-center year">
              {" "}
              Completed <br />
              <span style={{ color: "orange" }}>Project</span>{" "}
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
