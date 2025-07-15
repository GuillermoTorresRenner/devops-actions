import React from "react";
import Card from "../../components/servicios/Card";
import huertaUrbanaImg from "../../../public/images/servicios/huerta_urbana.png";
import disenoEspaciosVerdes from "../../../public/images/servicios/espacios_verdes.png";
import viveroArteanal from "../../../public/images/servicios/vivero_artesanal.png";

const Servicios = () => {
  return (
    <main className="mx-5 sm:mx-10 pt-20">
      <Card
        alt={"Imagen diseño de hurtas urbanas"}
        src={huertaUrbanaImg}
        title={"Diseño de huertas urbanas"}
        subtitle={
          "Gestión proyectos de agricultura urbana en el ámbito público y privado."
        }
        text={
          "Gestionamos un proyecto integral que abarca el diseño y la instalación de huertas orgánicas. Incluimos los insumos necesarios para llevar adelante un espacio con cultivos urbanos. Te acompañamos en el proceso inicial para garantizar que disfrutes de tu propia huerta de manera fácil y exitosa."
        }
        list={[
          "¿Qué incluye? Armado, instalación de la huerta.",
          "¿Cuánto tiempo toma? Dependiendo del tamaño del proyecto. ",
          "¿En dónde? Ciudad de Mendoza y alrededores.",
        ]}
      />
      <Card
        alt={"Imagen diseño de espacios verdes"}
        src={disenoEspaciosVerdes}
        title={"Diseño de espacios verdes"}
        subtitle={"Diseño de jardines residenciales y otros espacios verdes."}
        text={
          "Diseñamos jardines residenciales con una impronta ecológica de acuerdo a tu espacio y necesidades. Priorizamos el cuidado del ambiente en cada diseño y te asesoramos en la selección de plantas, macetas y otras decoraciones; buscando la mejor distribución de especies para que las plantas permanezcan sanas y vibrantes de manera orgánica. "
        }
        list={[
          "¿Qué incluye? Gestión del diseño para la posterior ejecución.",
          "¿Cuánto tiempo toma? Dependiendo del tamaño del proyecto.",
          "¿En dónde? Ciudad de Mendoza y alrededores.",
        ]}
      />
      <Card
        alt={"Imagen diseño de vivero artesanal"}
        src={viveroArteanal}
        title={"Vivero artesanal"}
        subtitle={
          "Un espacio ecológico para la creación de proyectos circulares."
        }
        text={
          "En nuestro local, convergen la eficiencia de la economía circular y la vitalidad de un vivero no convencional. El Vivero es un espacio colectivo en dónde puedes comprar local y de forma sustentable, conociendo sobre economía circular y redes de emprendimiento. "
        }
        list={[
          "¿En dónde estamos? Dorrego 1496, Guaymallén, Mendoza – Argentina.",
          "¿En qué horarios? Estamos de Lunes a Viernes de 16:30 - 20:30 hs. Los días sábados de 09:30 - 13:30 hs.",
          "¿Se necesita cita previa? Reserva tu cita si quieres venir de Lunes a Viernes por la mañana.",
        ]}
        btnText="Ir a Google Maps"
        href="https://www.google.com/maps/place/Dorrego+1496,+M5519+Guaymall%C3%A9n,+Mendoza,+Argentina/@-32.910697,-68.829089,16z/data=!4m6!3m5!1s0x967e09435be0458f:0x4fd29179b16c884e!8m2!3d-32.9106966!4d-68.8290893!16s%2Fg%2F11h04trvr5?hl=es-419&entry=ttu"
      />
    </main>
  );
};

export default Servicios;
