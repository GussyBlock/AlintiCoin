import React from "react";
import classes from "./Cascada.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export const Cascada = () => {
  return (
    <>
      <section className={classes.Cascada}>
        <div className={classes.Cascada__Imagen}>
          <Image
            src="/imagenes/bosque.jpg"
            alt="logo"
            width={160}
            height={90}
            layout="responsive" //DUDA
          />
        </div>

        <div className={classes.Cascada__Boton}>
          <h1>WHITE PAPER</h1>
        </div>
      </section>
    </>
  );
};
