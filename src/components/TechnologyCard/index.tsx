import { ITech } from "@/types";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

const TechnologyCard = ({ icon, technology, subTechnology }: ITech) => {
  return (
    <>
      <Card
        className="tech-card"
        style={{
          width: "18rem",
          height: "18rem"
        }}
      >
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <Image src={icon} alt="icon" width={50} height={45} />
        </div>
        <Card.Body>
          <Card.Title>{technology}</Card.Title>
          <Card.Text>{subTechnology}</Card.Text>
          <Card.Link href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default TechnologyCard;
