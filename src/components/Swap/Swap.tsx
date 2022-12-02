import classes from "./Swap.module.scss";
import Image from "next/image";

export const Swap = () => {
  return (
    <>
      <div className={classes.Swap}>
        <h1>SWAP</h1>
        <div className={classes.Swap__Content}>
          <div className={classes.Swap__Content__Parte1}>
            <h1>Ecosistema multibilletera</h1>
            <h5>
              Soporte para iOS, Android, Windows, Mac, Linux, billetera de
              hardware, web y otros clientes
            </h5>
            <div className={classes.Swap__Content__Parte1__Flex}>
              <h5>Escritorio</h5>
              <h5>Web</h5>
            </div>
            <div className={classes.Swap__Content__Parte1__Boton}>
              <h5>Página de descargas</h5>
            </div>
          </div>
          <div className={classes.Swap__Content__Imagen}>
            <Image
              src="/Imagenes/web/CO2.png"
              width={350}
              height={350}
              layout="responsive" // DUDA
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.Swap__Content__Parte2}>
            <div className={classes.Swap__Content__Parte2__Imagen}>
              <Image
                src="/Imagenes/web/swap.png"
                width={350}
                height={500}
                layout="responsive" // DUDA
                alt="inticoin-icon"
              />

              <h1>EXCHANGE</h1>

              <div className={classes.Swap__Content__Parte2__Imagen__Boton}>
                <h2>MOVR</h2>
                <h2>Liquidity</h2>
              </div>
              <div className={classes.Swap__Content__Parte2__Imagen__sawp}>
                <h2>BNB</h2>
                <h2>MOVR</h2>
              </div>
              <div className={classes.Swap__Content__Parte2__Imagen__Wallet}>
                <h2>Connect Wallet</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
