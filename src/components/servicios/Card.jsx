import React from "react";
import Image from "next/image";

const Card = ({
  src,
  alt,
  title,
  subtitle,
  text,
  list,
  href = "https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo",
  btnText = "Solicita un presupuesto",
}) => {
  return (
    <div className="border border-gray-400 rounded-2xl my-5">
      <div className="relative my-10">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 right-0 bg-opacity-25 backdrop-blur-sm p-4 rounded-lg w-2/3 md:w-1/2">
          <p className="text-white font-bold text-md sm:text-h3 md:text-5xl">
            {title}
          </p>
          <p className="text-white text-xs sm:text-lg md:text-2xl">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-2 items-end">
        <div className="hidden sm:block w-1/2 mb-5">
          <p>{text}</p>
          <ul className="list-disc list-inside mt-3">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className=" mb-5 ">
          <a
            href={href}
            className="border-2 border-primary rounded-2xl px-3 py-2 sm:bg-secondary sm:border-none"
            target="_blank"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
