import classes from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <section className={classes.footerParte1}>
          <div className={classes.footerParte1__Text}>
            <h1>News</h1>
            <h5>Las últimas actualizaciones de Alinticoin</h5>
            <button>Ver más</button>
          </div>
          <div className={classes.footerParte1__Img}>
            <Image
              src="/Imagenes/cargador-alinti.png"
              layout="responsive" // DUDA
              width={200}
              height={300}
              alt="inticoin-icon"
            />
          </div>
        </section>
        <section className={classes.footerParte2}>
          <div>
            <h1>ACERCA DE</h1>
            <h5>Equipo</h5>
            <h5>Reclutamiento</h5>
            <h5>Contáctenos</h5>
            <h5>Preguntas más frecuentes</h5>
            <h5>Versión antigua</h5>
            <h5>Política de privacidad de la Fundación Qtum Chain</h5>
          </div>
          <div>
            <h1>PRODUCTO</h1>
            <h5>Cartera</h5>
            <h5>Explorador</h5>
            <h5>mapa de nodos</h5>
          </div>
          <div>
            <h1>COMUNIDAD</h1>
            <h5>Desarrollador</h5>
            <h5>Últimas noticias</h5>
            <h5>Foro</h5>
            <h5>Recursos</h5>
          </div>
          <div>
            <h1>IDIOMAS</h1>
            <h5>inglés</h5>
            <h5>Русский</h5>
            <h5>한국어</h5>
          </div>
        </section>
        <section className={classes.footerParte3}>
          <div className={classes.footerParte3__Imagen}>
            <div>
              <Image
                src="/Imagenes/web/Recurso 64.png"
                width={150}
                height={150}
                layout="responsive" // DUDA
                alt="inticoin-icddon"
              />
            </div>
          </div>
          <div className={classes.footerParte3__Suscribir}>
            <h4>Suscribete para recibir nuestras actualizaciones</h4>

            <div className={classes.footerParte3__SuscribirImput}>
              <input type="text" />
              <h3>Suscribete</h3>
            </div>

            <h4>© Copyright Inticoin 2021 - Todos los derechos reservados</h4>
          </div>
          <div className={classes.footerParte3__SocialMedia}>
            <h2>Síganos</h2>
            <div className={classes.footerParte3__SocialMediaIcon}>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/fb-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/twitter-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/telegram-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/discord-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/youtube-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/Imagenes/footer/inst-icon.png"
                      width={40}
                      height={40}
                      alt="inticoin-icddon"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
