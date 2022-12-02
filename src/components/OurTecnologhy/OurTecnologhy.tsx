import classes from "./OurTecnologhy.module.scss";
import Image from "next/image";

export const OurTecnologhy = () => {
  return (
    <>
      <div className={classes.OurTecnologhy}>
        <section className={classes.OurTecnologhy__Text}>
          <p>
            Las plantas son la base de la vida del hombre porque son la conexión
            entre el sol y la tierra.
          </p>

          <h1>OUR TECNOLOGHY</h1>

          <p>
            Alinti Coin is a REFI project that allows us to accelerate the
            financing of the manufacturing and commercialization of Alinti
            products (B2C, B2B, B2G) that provide green energy through plant
            photosynthesis together with the nanotechnology that we have been
            developing for more than 6 years.
          </p>
        </section>

        <section className={classes.OurTecnologhy__Column}>
          <div className={classes.OurTecnologhy__ColumnNum}>
            <div>1</div>
            <p>
              IntiCoin, la primera criptomoneda peruana, será una red blockchain
              descentralizada que admitirá contratos inteligentes de alto
              rendimiento que estará integrada con la máquina virtual Ethereum
              (EVM). Espera generar un futuro que permitirá a los
              desarrolladores implementar sus propias aplicaciones
              descentralizadas. Iniciará sus operaciones siendo un token ERC20
              con la
            </p>
          </div>
          <div className={classes.OurTecnologhy__ColumnNum}>
            <div>2</div>
            <p>
              Experiencia comprobada en muchas industriasCasos probados de
              aplicaciones de nivel empresarial en varios sectores, como la
              seguridad alimentaria, la huella de carbono y la sostenibilidad,
              los artículos de lujo, los bienes de consumo, el alcohol, la
              automoción, etc., que han logrado avances en la coherencia de la
              información y la innovación del modelo de negocio.
            </p>
          </div>
          <div className={classes.OurTecnologhy__ColumnNum}>
            <div>3</div>
            <p>
              Plataforma de cadena de bloques fácil de implementarLa
              infraestructura blockchain robusta y segura que presenta
              soluciones llave en mano con software y hardware garantiza una
              implementación rápida para empresas y desarrolladores.
            </p>
          </div>
          <div className={classes.OurTecnologhy__ColumnNum}>
            <div>4</div>
            <p>
              Red de socios para la expansión del ecosistemaEl ecosistema
              empresarial de INTICOIN incluye muchos socios comerciales y
              tecnológicos que promueven la adopción y la innovación de
              aplicaciones de blockchain al empoderarse mutuamente, creando un
              valor exponencial para todos los participantes de la red
            </p>
          </div>
        </section>
        <section className={classes.OurTecnologhy__Img1}>
          <Image
            src="/Imagenes/web/Alinti-verde-final.png"
            width={300}
            height={300}
            layout="intrinsic" // DUDA
            alt="inticoin-icddon"
          />
        </section>
      </div>
    </>
  );
};
