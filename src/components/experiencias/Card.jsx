import React from "react";
import Image from "next/image";

const Card = ({ src, alt, title, text }) => {
  return (
    <div className="border border-gray-400 rounded-2xl my-5">
      <div className="h-1/2  relative">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="px-10 py-5 md:py-10">
        <h2 className="text-center text-3xl font-bold">{title}</h2>
        <p className="text-center text-[22px] mt-3">{text}</p>
      </div>
    </div>
  );
};

export default Card;
