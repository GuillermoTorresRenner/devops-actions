import React from "react";
import Card from "../../components/recursos/Card";
import Img1 from "../../../public/images/recursos/image_card_1.png";
import Img2 from "../../../public/images/recursos/image_card_2.png";
import Img3 from "../../../public/images/recursos/image_card_3.png";

const Recursos = () => {
  return (
    <main className="mx-5 sm:mx-10 px-10 md:px-20">
      <div className="pt-20">
        <Card
          src={Img1}
          alt={"Cómo comenzar a compostar"}
          title={"Cómo comenzar a compostar"}
          text={
            "En este E-book conocerás unos sencillos tips para que puedas realizar tu propio compost desde casa."
          }
          pdf={
            "https://drive.google.com/file/d/1aykN5OTwBPPaLq1DM2x6HCFIMl0FhpkH/view?usp=sharing"
          }
        />
        <Card
          src={Img2}
          alt={"Huerta Fácil"}
          title={"Huerta Fácil"}
          text={
            "En este E-Book conocerás 5 sencillos pasos para realizar tu huerta en un cantero."
          }
          pdf={
            "https://drive.google.com/file/d/1vKqMqUGDtJjYDO-izeQrV3OoNwBngUUU/view?usp=sharing"
          }
        />
        <Card
          src={Img3}
          alt={"Cambio de estación en la huerta"}
          title={"Cambio de estación en la huerta"}
          text={
            "Conoce los pasos que debes realizar cuando llegue el cambio de estación en tu huerta."
          }
          pdf={
            "https://drive.google.com/file/d/1Za-juAet17FrE57a691VflSEWeerWGA3/view?usp=sharing"
          }
        />
      </div>
    </main>
  );
};

export default Recursos;
