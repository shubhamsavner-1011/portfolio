import AnimatedTextWord from "@/components/AnimatedText";
import { color } from "@/constants/colorContants";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { ListGroup } from "react-bootstrap";
import Image from "next/image";
import { imgUrl } from "@/constants/imageConstants";
import BasicCard from "@/components/BasicCard";
import SocialIcons from "@/components/SocialIcons";
const Home = () => {
  return (
    <>
      <div className="container  personal-details" id="home">
        <Row>
          <Col xs={12} md={6}>
            <AnimatedTextWord text={"Hey! I Am React"} color={color.navy} />
            <AnimatedTextWord text={"Developer"} color={color.orange} />
            <div className="mt-5">
              <p className="subtitle animate__animated animate__bounce">
                Web Developer with Good Knowladage in web designing <br />
                and development, producting the Quality work
              </p>
            </div>
            <button className="contact navlinks">Hire me</button>

            <div className="bootstrap-icons mt-5">
             <SocialIcons/>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="animate__animated animate__bounceInRight text-center position-relative"
          >
            <div className="position-absolute end-0 custom-class" >
              <BasicCard title="Web Developer" src={imgUrl.crown}/>
            </div>
            <Image src={imgUrl.myImage} alt="my-profile" className="my-image" />
            <div className="position-absolute start-0 custom-thumb">
              <BasicCard title="Best Web Design" src={imgUrl.thumb} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
