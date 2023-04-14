import { ILogo } from "@/types";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";


const BasicCard = ({ title, src }: ILogo) => {
  return (
    <div>
      <Card style={{ width: "15rem" , border: "none"}}>
        <Card.Body>
          <span>
            <Image className="mx-3" src={src} alt="icons" height={40} width={40}/>
          </span>
          {title}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BasicCard;
