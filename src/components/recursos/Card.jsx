"use client";
import React from "react";
import Image from "next/image";

const Card = ({ src, alt, title, text, pdf }) => {
  return (
    <div className="border border-gray-400 rounded-2xl my-5 relative  sm:my-10">
      <div className="relative h-full">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
        <h2 className="absolute bottom-10 left-4 text-white text-2xl lg:text-8xl w-3/5 md:1/4">
          {title}
        </h2>
      </div>
      <p className="my-10 px-5 text-center">{text}</p>
      <div className="flex justify-center mb-10 mt-5">
        <a
          href={pdf}
          className="bg-white border border-primary rounded-2xl py-2 px-4 w-auto max-w-xs text-center"
          target="_blank"
          download
        >
          Descarga E-Book
        </a>
      </div>
    </div>
  );
};

export default Card;
