import SocialIcons from "@/components/SocialIcons";
import React from "react";

const SocialDeatails = () => {
  return (
    <div className="social" id="social">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave">
          <div className="position-relative text-center mt-5 ">
            <p className="email">shubham.savner66@gmail.com</p>
          </div>
          <div className="bootstrap-icons mt-3 d-flex justify-content-center">
             <SocialIcons/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDeatails;
