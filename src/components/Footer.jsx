"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <footer className="bg-neutral h-1/6 pt-5 ">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-start">
        <div className=" flex flex-col items-center sm:items-start sm:w-1/4 my-5 mx-0 sm:mx-5">
          <Image alt="logo" src="/images/logo.png" width={200} height={200} />
          <p className="hidden sm:block mt-5 ">
            Somos un vivero con compromiso ambiental, social y económico.
            Realizamos proyectos de agricultura urbana y paisajes en la ciudad.
          </p>
        </div>
        <div className="flex justify-between gap-4 items-start mx-5">
          <div>
            <h3 className="">Links</h3>
            <ul className="">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobremi">Sobre mí</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/experiencias">Talleres</Link>
              </li>
              <li>
                <Link href="/recursos">Recursos</Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
                  target="_blank"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          {/* bloque unificado */}
          <div className="flex flex-col-reverse w-2/3 sm:w-full sm:justify-around sm:flex-row">
            <div className="flex flex-col w-1/4  items-start gap-y-2 ">
              <h3>Contacto</h3>

              <div className="flex items-center gap-2">
                <HiOutlineMail />
                <a href="mailto:eltomillomza@gmail.com">
                  {" "}
                  eltomillomza@gmail.com
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="flex gap-10">
                  <a
                    href="https://web.facebook.com/eltomillomza/?locale=es_LA&_rdc=1&_rdr"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/eltomillomza/?hl=es-la"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <div className="sm:px-16">
              <h3>Ubicación</h3>

              <div className="flex justify-center items-start gap-2 ">
                <GoLocation />
                <p>Dorrego 1496 Guaymallén, Mendoza, Argentina</p>
              </div>
              <div className="my-10 hidden sm:block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.4691596649801!2d-68.82918511127046!3d-32.910865082893324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09435be0458f%3A0x4fd29179b16c884e!2sDorrego%201496%2C%20M5519%20Guaymall%C3%A9n%2C%20Mendoza%2C%20Argentina!5e0!3m2!1ses-419!2scl!4v1712905194214!5m2!1ses-419!2scl"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-neutral flex justify-between px-5 sm:px-20 h-20 items-center mt-10">
        <span>@2024 eltomillo</span>
        <div className="sm:hidden flex gap-5 ">
          <a
            href="https://web.facebook.com/eltomillomza/?locale=es_LA&_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/eltomillomza/?hl=es-la"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
