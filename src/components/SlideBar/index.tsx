import { Iimage } from "@/types";
import Image from "next/image";

import Slider from "react-slick";

const SlideBar = ({ Images }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {Images.map((item: Iimage) => {
          return (
            <>
              <div style={{padding: "60px 0" }}>
                <Image
                  src={item?.portfolio}
                  alt="port"
                  height={400}
                  width={550}
                  className="portfolio-card"
                />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideBar;
