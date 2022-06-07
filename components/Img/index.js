import React from "react";
import Image from "next/image";

export const Img = ({ src }) => {
  return (
    <Image src={src} alt={"Author of the quote"} width={242} height={224} />
  );
};
