import { StaticImageData } from "next/image";

export interface ILogo {
  src: string | StaticImageData;
  title: string;
  // src: string;
  className?: string;
}

export interface ITech {
  icon : string | StaticImageData;
  technology: string,
  subTechnology: string  
}