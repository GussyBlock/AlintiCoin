import classes from "./Creator.module.scss";
import Image from "next/image";

export const Creator = () => {
  return (
    <>
      <div className={classes.Creator}>
        <div className={classes.CreatorParte1}>
          <section className={classes.CreatorParte1__Title}>
            <h1> SOBRE EL CREADOR</h1>
          </section>

          <section className={classes.CreatorParte1__Info}>
            <div className={classes.CreatorParte1__Info__Img1}>
              <Image
                src="/Imagenes/web/Recurso 59.png"
                width={350}
                height={450}
                layout="responsive" // DUDA
                alt="inticoin-icon"
              />
            </div>
            <div className={classes.CreatorParte1__Info__Video}>
              <h5>
                Hernan, de 32 años es ingeniero civil e industrial, inventor,
                investigador, participante activo de voluntariado y emprendedor
                que vivió en carne propia la falta de electricidad en su hogar,
                en casa usaban las velas para alumbrase y hacer sus tareas
                escolares.
              </h5>
              <div>
                <iframe
                  width="560"
                  height="250"
                  src="https://www.youtube.com/embed/vvrm9FYqz0I"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div className={classes.CreatorParte1__Info__Img2}>
              <Image
                src="/Imagenes/web/Recurso 61.png"
                layout="responsive" // DUDA
                width={280}
                height={450}
                alt="inticoin-icon"
              />
            </div>
          </section>
        </div>

        <div className={classes.CreatorParte2}>
          <div className={classes.CreatorParte2__Img}></div>
          <div className={classes.CreatorParte2__text}>
            <h4>
              Ready to be part of the worlds energy solution? Subtitulo
              Inferior: Alinti Coin is a REFI project that allows us to
              accelerate the financing of the manufacturing and
              commercialization of Alinti products (B2C, B2B, B2G) that provide
              green energy through plant photosynthesis together with the
              nanotechnology that we have been developing for more than 6 years
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
