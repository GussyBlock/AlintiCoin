import classes from "./Sponsor.module.scss";
import Image from "next/image";

export const Sponsor = () => {
  return (
    <>
      <div className={classes.Sponsor}>
        <div className={classes.Sponsor__Title}>
          <h5> Patente - Propiedad intelectual e industrial</h5>
        </div>
        <div className={classes.SponsorRow}>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Patente.png"
              width={800}
              height={100}
              alt="inticoin-icon"
            />
          </div>
        </div>
      </div>

      <div className={classes.Sponsor}>
        <div className={classes.Sponsor__Title}>
          <h5> Universidades y certificadoras que avalan nuestra tecnología</h5>
        </div>
        <div className={classes.SponsorRow}>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/esan.png"
              width={200}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/fablab.png"
              width={200}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/innova.png"
              width={100}
              height={100}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/politecnica-madrid.png"
              width={250}
              height={100}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/san-marcos.png"
              width={250}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/senasa.png"
              width={90}
              height={90}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Universidades y certificadoras que avalan nuestra tecnología/univ-huamanga.png"
              width={200}
              height={80}
              alt="inticoin-icon"
            />
          </div>
        </div>
      </div>
      <div className={classes.Sponsor}>
        <div className={classes.Sponsor__Title}>
          <h5> Empresas y organizaciones que avalan nuestra tecnología</h5>
        </div>

        <div className={classes.SponsorRow}>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/att.png"
              width={100}
              height={150}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/directv.png"
              width={200}
              height={70}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/expolive.png"
              width={90}
              height={90}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/history.png"
              width={150}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/juguete-pendiente.png"
              width={200}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/meta.png"
              width={200}
              height={80}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/movistar.png"
              width={150}
              height={90}
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.SponsorRow__Img}>
            <Image
              src="/Imagenes/Empresas y organizaciones que avalan nuestra tecnología/telefonica.png"
              width={200}
              height={70}
              alt="inticoin-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
