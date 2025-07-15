import Image from "next/image";
import Link from "next/link";

const ProductsCard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div
        id="componentHeader"
        className="relative z-10 bg-white text-primary p-6 flex flex-col justify-center items-start w-[420px] min-w-[420px]"
      >
        <h6 className="text-subhead text-left pb-4">Productos</h6>
        <p className="text-4xl font-bold text-left font-merryweather">
          Diseñamos en base a la circularidad de la naturaleza
        </p>
      </div>

      <div
        className="slides relative flex gap-6 mx-2 hover:-translate-x-0 md:hover:-translate-x-1/2"
        style={{ minWidth: "100vw" }}
      >
        <div className="relative flex flex-col justify-center items-center gap-2 w-[350px] min-w-[350px] h-[500px] rounded-2xl overflow-hidden">
          <Image
            className="absolute -z-10 brightness-50"
            src="/images/inicio/inicio_productos_catalogoConsciente.png"
            alt=""
            width={350}
            height={500}
          />
          <p className="text-3xl text-center text-white font-merryweather px-8">
            Catálogo consciente
          </p>
          <Link
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_self"
            className=" w-25 text-button text-white hover:text-primary font-urbanist bg-black bg-opacity-25 hover:bg-secondary border border-white rounded rounded-lg px-6 py-2 my-2"
          >
            <span className="text-center">Ver producto</span>
          </Link>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-2 w-[350px] min-w-[350px] h-[500px] rounded-2xl overflow-hidden">
          <Image
            className="absolute -z-10 brightness-50"
            src="/images/inicio/inicio_productos_macetas.png"
            alt=""
            width={350}
            height={500}
          />
          <p className="text-3xl text-center text-white font-merryweather px-8">
            Macetas
          </p>
          <Link
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_self"
            className=" w-25 text-button text-white hover:text-primary font-urbanist bg-black bg-opacity-25 hover:bg-secondary border border-white rounded rounded-lg px-6 py-2 my-2"
          >
            <span className="text-center">Ver producto</span>
          </Link>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-2 w-[350px] min-w-[350px] h-[500px] rounded-2xl overflow-hidden">
          <Image
            className="absolute -z-10 brightness-50"
            src="/images/inicio/inicio_productos_plantasKokedamas.png"
            alt=""
            width={350}
            height={500}
          />
          <p className="text-3xl text-center text-white font-merryweather px-8">
            Plantas de interior y Kokedamas
          </p>
          <Link
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_self"
            className=" w-25 text-button text-white hover:text-primary font-urbanist bg-black bg-opacity-25 hover:bg-secondary border border-white rounded rounded-lg px-6 py-2 my-2"
          >
            <span className="text-center">Ver producto</span>
          </Link>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-2 w-[350px] min-w-[350px] h-[500px] rounded-2xl overflow-hidden">
          <Image
            className="absolute -z-10 brightness-50"
            src="/images/inicio/inicio_productos_plantasExterior.png"
            alt=""
            width={350}
            height={500}
          />
          <p className="text-3xl text-center text-white font-merryweather px-8">
            Plantas de exterior
          </p>
          <Link
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_self"
            className=" w-25 text-button text-white hover:text-primary font-urbanist bg-black bg-opacity-25 hover:bg-secondary border border-white rounded rounded-lg px-6 py-2 my-2"
          >
            <span className="text-center">Ver producto</span>
          </Link>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-2 w-[350px] min-w-[350px] h-[500px] rounded-2xl overflow-hidden">
          <Image
            className="absolute -z-10 brightness-50"
            src="/images/inicio/inicio_productos_insumos.png"
            alt=""
            width={350}
            height={500}
          />
          <p className="text-3xl text-center text-white font-merryweather px-8">
            Huertas e insumos
          </p>
          <Link
            href="https://wa.me/5492615970583?text=Quiero%20saber%20m%C3%A1s%20del%20espacio%20agrourbano%20El%20Tomillo."
            target="_self"
            className=" w-25 text-button text-white hover:text-primary font-urbanist bg-black bg-opacity-25 hover:bg-secondary border border-white rounded rounded-lg px-6 py-2 my-2"
          >
            <span className="text-center">Ver producto</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
