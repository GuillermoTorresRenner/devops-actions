import React from "react";
import Image from "next/image";
import FlipCard1 from "@/components/inicio/FlipCard1";
import FlipCard2 from "@/components/inicio/FlipCard2";
import AccordionGallery from "@/components/inicio/AccordionGallery";
import ProductsCard from "@/components/inicio/ProductsCard";

export default function Home() {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center bg-white px-16 my-20">
        <span className="text-primary text-center text-subhead md:text-h1 font-merryweather font-bold">
          <strong>Nuestro propósito es</strong>{" "}
          <i> conectar a las personas con la naturaleza,</i>{" "}
          <strong> en el ritmo de la ciudad.</strong>
        </span>

        <span className="text-primary text-center text-caption md:text-subhead p-8">
          La naturaleza tiene la máxima sabiduría y diseñar en pos de los
          propios recursos que ella ofrece, es parte de nosotros.
        </span>
      </section>

      <section
        id="historia"
        className='flex flex-col-reverse md:flex-row justify-center items-center bg-primary bg-[url("/images/leaf_pattern_light.svg")] bg-auto bg-repeat py-0 md:py-8 my-12'
      >
        {/* Div caption */}
        <div className="flex flex-col justify-center items-center md:items-start my-8 px-12 w-full md:w-1/2">
          <span className="text-primary text-start text-h2 font-merryweather font-bold mx-4 my-4 md:mx-0">
            Nuestra historia
          </span>

          <p className="text-primary text-center md:text-start text-subhead font-merryweather mx-4 my-4 md:mx-0">
            Soy Laura, fundadora de{" "}
            <strong>
              <i>El Tomillo Espacio Agrourbano.</i>
            </strong>{" "}
            Este proyecto nació de mi deseo personal de transformar mis hábitos
            diarios hacia un{" "}
            <strong>
              <i>estilo de vida más sostenible.</i>
            </strong>
          </p>

          <span className="hidden md:block text-primary text-center md:text-start text-button mx-4 my-4 md:mx-0">
            Trabajo con un{" "}
            <strong>
              <i>enfoque agrourbano</i>
            </strong>{" "}
            que se refleja en cada uno de mis proyectos. Así sembré El Tomillo
            Espacio Agrourbano, para que sea la raíz de una visión: un espacio
            en el que la naturaleza y la ciudad coexisten, creando armonía entre
            belleza y funcionalidad.
          </span>

          <div className="flex justify-center md:justify-start items-center">
            <a
              href="/sobremi"
              target="_self"
              className="block text-button font-urbanist hover:text-primary bg-transparent hover:bg-secondary border border-primary  rounded-lg mx-auto px-6 py-2 my-2"
            >
              <p className="text-center">Conocer más</p>
            </a>
          </div>
        </div>

        {/* Div Image */}
        <div className="flex flex-col justify-center items-center px-0 md:px-12 w-full md:w-1/2">
          <Image
            className="block md:hidden rounded rounded-0 md:rounded-2xl m-0 md:m-4"
            src="/images/inicio/inicio_historia_imgH.png"
            alt=""
            width={700}
            height={700}
          />
          <Image
            className="hidden md:block rounded rounded-0 md:rounded-2xl m-0 md:m-4"
            src="/images/inicio/inicio_historia_imgV.png"
            alt=""
            width={700}
            height={700}
          />
        </div>
      </section>

      {/* Section - Servicios */}
      <section className="my-12 px-8">
        <div className="flex flex-col justify-center items-center mb-6">
          <span className="text-h2">Servicios</span>
          <span className="text-center text-h2 w-4/5 md:w-2/5 font-merryweather font-bold">
            Contamos con servicios diseñados para cada usuario
          </span>
        </div>

        <div className="hidden md:block">
          <AccordionGallery
            image1={"/images/inicio/inicio_servicios_img1.png"}
            image2={"/images/inicio/inicio_servicios_img2.png"}
            image3={"/images/inicio/inicio_servicios_img3.png"}
            title1={"Diseño de huertas urbanas"}
            title2={"Diseño de espacios verdes"}
            title3={"Vivero artesanal"}
          />
        </div>

        <div className="flex md:hidden justify-center flex-wrap items-center gap-8 py-16">
          <FlipCard1
            bg_image={"/images/inicio/inicio_servicios_img1.png"}
            title={"Diseño de huertas urbanas"}
            description={
              "En esta parte de la tarjeta debería ir una descripción."
            }
          />
        </div>

        <div className="flex justify-center items-center mb-6">
          <a
            href="/servicios"
            target="_self"
            className="text-button font-urbanist hover:text-primary bg-transparent hover:bg-secondary border border-primary rounded-lg mx-auto px-6 py-2 my-2"
          >
            <p className="text-center">Ver más servicios</p>
          </a>
        </div>
      </section>
      {/* Section - Productos */}
      <section>
        <ProductsCard />
      </section>

      <section
        id="experiencia"
        className="hidden md:block relative my-6 overflow-hidden"
      >
        <Image
          src="/images/inicio/inicio_vive_una_experiencia.png"
          alt=""
          width={1900}
          height={600}
        />
        <div className="absolute w-full sm:w-3/4 md:w-2/5 -bottom-5 right-0 bg-primary opacity-90 flex flex-col p-16 rounded rounded-s-3xl">
          <span className="text-white text-subhead md:text-h2 font-merryweather font-bold">
            Vive una experiencia única con nuestros talleres
          </span>
          <a
            href="/experiencias"
            target="_self"
            className="text-button text-white hover:text-primary font-urbanist bg-transparent hover:bg-secondary border border-white  rounded-lg mx-auto px-6 py-2 my-2"
          >
            <p className="text-center">Más información</p>
          </a>
        </div>
      </section>

      {/* Section - Proyectos */}
      <section id="proyectos" className="relative my-12 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <span className="text-h2">Proyectos</span>
          <span className="text-center text-h2 w-4/5 md:w-2/5 font-merryweather font-bold">
            Conoce los proyectos realizados en{" "}
            <strong>
              <i>El Tomillo</i>
            </strong>
          </span>
        </div>

        <div className="flex flex-wrap justify-center p-8 gap-8">
          <FlipCard2
            bg_image={"/images/inicio/inicio_servicios_img3.png"}
            title={"La huerta urbana"}
            description={
              "Vení y huerteá con nosotras. Visitá nuestra huerta educativa y aprende a tener tu propia huerta urbana."
            }
          />

          <FlipCard2
            bg_image={"/images/inicio/inicio_proyectos_img2.png"}
            title={"Vivero circular"}
            description={
              "Vendé tus plantas con nosotras. Podés traernos tus plantas y utilizar nuestras redes para la venta, fomentando una economía más colaborativa."
            }
          />

          <FlipCard2
            bg_image={"/images/inicio/inicio_proyectos_img3.png"}
            title={"Mi mundo verde"}
            description={
              "Te compartiré pequeños tips para que puedas llevar una vida más sustentable, aún en la ciudad."
            }
          />

          <FlipCard2
            bg_image={"/images/inicio/inicio_proyectos_img4.png"}
            title={"Paneles verticales"}
            description={
              'Bajo el lema "Menos plástico...Más Vida". Disponé de Naturaleza inmediata y tomá conciencia de la importancia de la reutilización del plástico.'
            }
          />

          <FlipCard2
            bg_image={"/images/inicio/inicio_proyectos_img5.png"}
            title={"Naturaleza online"}
            description={
              "A través de la digitalización, diseñamos el espacio verde de tus sueños a todo el mundo."
            }
          />

          <FlipCard2
            bg_image={"/images/inicio/inicio_proyectos_img6.png"}
            title={"Tardes de taller"}
            description={
              "Espacio de co-creación de mujeres emprendedoras, donde convergen ideas, productos y talleres."
            }
          />
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo"
            target="_self"
            className="text-button text-primary hover:text-primary font-urbanist bg-transparent hover:bg-secondary border border-primary rounded-lg m-auto px-6 py-2 my-2"
          >
            <span className="text-center">Más información</span>
          </a>
        </div>
      </section>

      <section id="recursos" className="bg-primary my-12 p-8">
        <div>
          <span className="block w-1/2 mx-auto text-white text-center text-button">
            Recursos online
          </span>
          <span className="block w-3/4 sm:w-2/3 md:w-1/2 mx-auto my-4 text-white text-center text-h2 font-merryweather">
            Aprende de manera autodidacta conmigo
          </span>
        </div>

        <div className="flex justify-center">
          <a
            href="/recursos"
            target="_self"
            className="block text-white text-button font-urbanist hover:text-primary bg-transparent hover:bg-secondary border border-white  rounded-lg mx-auto px-6 py-2 my-2"
          >
            <p className="text-center">Ver E-books</p>
          </a>
        </div>
      </section>
    </div>
  );
}
