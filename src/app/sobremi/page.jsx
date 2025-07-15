import React from "react";
import Image from "next/image";
import Card from "@/components/sobremi/Card";
import CustomCarousel from "@/components/sobremi/CustomCarousel";
import MiniAccordion from "@/components/sobremi/MiniAccordion";

const Sobremi = () => {
  return (
    <div className="">
      <section className="flex flex-col md:flex-row justify-center items-center -100 my-10 p-8">
        <div className="block md:hidden mb-16">
          <span className="hidden md:block w-full text-center md:text-start text-subhead md:text-h3">
            Conóceme
          </span>
          <span className="block w-full text-center text-h2 font-merryweather font-bold">
            Soy la creadora de un
          </span>
          <span className="block w-full text-center text-h2 font-merryweather font-bold">
            espacio donde la <i>naturaleza</i>
          </span>
          <span className="block w-full text-center text-h2 font-merryweather font-bold">
            <i>y la ciudad coexisten.</i>
          </span>
        </div>

        <div>
          <Image
            className="rounded rounded-2xl"
            src="/images/sobremi/img_sobremi_mlc.png"
            alt=""
            width={600}
            height={600}
          />
        </div>

        <div className="w-full flex flex-col justify-center md:justify-start items-center md:w-1/3 px-8">
          <div className="w-full hidden md:block">
            <span className="hidden md:block w-full text-left md:text-start text-subhead md:text-h3">
              Conóceme
            </span>
            <span className="block w-full text-left text-subhead font-merryweather font-bold">
              Soy la creadora de un
            </span>
            <span className="block w-full text-left text-subhead font-merryweather font-bold">
              espacio donde la <i>naturaleza</i>
            </span>
            <span className="block w-full text-left text-subhead font-merryweather font-bold">
              <i>y la ciudad coexisten.</i>
            </span>
          </div>

          <div className="w-full flex md:hidden justify-center items-center mt-4">
            <a
              href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo"
              target="_self"
              className="block text-button font-urbanist hover:text-primary bg-transparent hover:bg-secondary border border-primary rounded-lg px-6 py-2 my-2"
            >
              {" "}
              <p>Te cuento un poco sobre mí</p>{" "}
            </a>
          </div>

          <div className="w-full hidden md:flex justify-left items-center mt-4">
            <a
              href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo"
              target="_self"
              className="block text-button font-urbanist hover:text-primary bg-transparent hover:bg-secondary border border-primary rounded-lg px-6 py-2 my-2"
            >
              {" "}
              <p>Te cuento un poco sobre mí</p>{" "}
            </a>
          </div>

          {/* Se duuplican los párrafos por conflictos con los estilos de flow-bite */}
          <div className="w-full flex flex-col justify-center items-center md:items-start my-8">
            <p className="block md:hidden text-center">
              ¡Hola! Soy Laura, creadora de{" "}
              <strong>
                <i>El Tomillo Espacio Agrourbano</i>
              </strong>
              , un espacio donde la naturaleza y la ciudad coexisten.
              <br />
              Me motiva el diseño de espacios verdes con una impronta ambiental.
              <br />
              Mi sueño es que las ciudades puedan tener jardines y huertas
              urbanas al alcance de todos. Me encanta mi trabajo que combina la
              pasión por el diseño con habilidades para la gestión de proyectos.
            </p>

            <p className="hidden md:block text-left">
              ¡Hola! Soy Laura, creadora de{" "}
              <strong>
                <i>El Tomillo Espacio Agrourbano</i>
              </strong>
              , un espacio donde la naturaleza y la ciudad coexisten.
              <br />
              Me motiva el diseño de espacios verdes con una impronta ambiental.
              <br />
              Mi sueño es que las ciudades puedan tener jardines y huertas
              urbanas al alcance de todos. Me encanta mi trabajo que combina la
              pasión por el diseño con habilidades para la gestión de proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Mi compromiso */}
      <section className='flex flex-col justify-center items-center bg-[url("/images/leaf_pattern_light.svg")] bg-cover bg-repeat py-8 my-10'>
        <div className="w-full">
          <span className="block text-center text-subhead">Mi compromiso</span>
          <span className="block w-2/3 md:w-1/2  mx-auto text-center text-h2 font-merryweather font-bold">
            Sembrar la promesa de un <i>futuro más sostenible</i>
          </span>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex">
            <Card
              iconUrl={"/images/sobremi/card_cultivation_icon.svg"}
              startText={"Cultivar plantas, "}
              boldtext={"generar experiencias y "}
              endText={"y tejer vinculos de trabajo."}
            />

            <Card
              iconUrl={"/images/sobremi/card_love_icon.svg"}
              startText={"Ayudar a logra una mayor "}
              boldtext={"conexion "}
              endText={"con la naturaleza."}
            />
          </div>

          <div className="flex">
            <Card
              iconUrl={"/images/sobremi/card_balance_icon.svg"}
              startText={"Guiar en la busqueda del "}
              boldtext={"equilibrio "}
              endText={"hacia un buen futuro."}
            />

            <Card
              iconUrl={"/images/sobremi/card_nature_icon.svg"}
              startText={"Apostar por el aprendizaje y "}
              boldtext={"compartir "}
              endText={"conocimientos."}
            />
          </div>
        </div>
      </section>

      {/* Section - Ideología */}
      <section
        id="ideologia"
        className='flex flex-col-reverse md:flex-row justify-center items-center bg-primary bg-[url("/images/leaf_pattern_dark.svg")] bg-auto bg-repeat py-0  md:py-8 my-20'
      >
        {/* Div caption */}
        <div className="flex flex-col justify-start items-center md:items-start my-8 px-12 w-full md:w-1/2">
          <span className="text-white text-start text-subhead font-h2 mx-4 my-4 md:mx-0">
            Ideología de trabajo
          </span>

          <p className="text-white text-center md:text-start font-bold text-subhead font-merryweather mx-4 my-4 md:mx-0">
            Mi enfoque de trabajo se centra en el concepto de circularidad en
            todos sus aspectos, desde materias primas hasta relaciones humanas.
          </p>

          <MiniAccordion />

          {/* <ul className="w-full">
                        <li className="flex items-center gap-4 my-2">
                            <Image
                                src="/images/sobremi/white_arrow_down.svg"
                                alt="white arrow"
                                width={20}
                                height={20}
                            />
                            <span className="text-white text-button">
                                Perspectiva ambiental
                            </span>
                        </li>
                        <li className="flex items-center gap-4 ">
                            <Image
                                src="/images/sobremi/white_arrow_down.svg"
                                alt="white arrow"
                                width={20}
                                height={20}
                            />
                            <span className="text-white text-button">
                                Perspectiva social
                            </span>
                        </li>
                    </ul> */}
        </div>

        {/* Div Image */}
        <div className="flex flex-col justify-center items-center px-0 md:px-12 w-full md:w-1/2">
          <Image
            className="rounded rounded-0 md:rounded-2xl m-0 md:m-4"
            src="/images/sobremi/img_sobremi_ideologia.png"
            alt=""
            width={700}
            height={700}
          />
        </div>
      </section>

      {/* Section - Galeria */}
      <section id="galeria" className="w-2/3 m-auto mb-24">
        <div className="flex flex-col">
          <span className="text-center text-4xl mb-3 w-full font-merryweather font-bold">
            Nuestra Galería
          </span>
          <CustomCarousel />
        </div>
      </section>
    </div>
  );
};

export default Sobremi;
