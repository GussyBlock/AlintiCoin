import classes from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <section className={classes.headerParte1}>
          <div className={classes.headerParte1__Imagen}>
            <Image
              src="/Imagenes/web/Recurso 64.png"
              width={90}
              height={90}
              // layout="responsive" // DUDA
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.headerParte1__Tex}>
            <div>
              <p>Fecha y hora</p>
            </div>
            <div>
              <p>Conectar Wallet</p>
            </div>
          </div>
        </section>
        <section className={classes.headerParte2}>
          <div>
            <h4>HOME</h4>
          </div>
          <div>
            <h4>CROWDSALE</h4>
          </div>
          <div>
            <h4>EARN</h4>
          </div>
          <div>
            <h4>TEAM</h4>
          </div>
          <div>
            <h4>ABOUT</h4>
          </div>
          <div>
            <h4>ALINTIWIKI</h4>
          </div>
        </section>
      </div>
    </>
  );
};

<div></div>;
