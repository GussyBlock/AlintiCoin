import classes from "./Welcome.module.scss";
import Image from "next/image";

export const Welcome = () => {
  return (
    <>
      <div className={classes.Welcome}>
        <p>Welcome to ALINTICOIN</p>
        <div className={classes.Welcome__Grid}>
          <div className={classes.Welcome__Grid__Des}>
            <p>International renewable energy alinti farm limited</p>
            <div className={classes.Welcome__Grid__Des__Img}>
              <Image
                src="/imagenes/web/Recurso 62.png"
                alt="logo"
                width={5}
                height={110}
              />
            </div>
          </div>

          <div className={classes.Welcome__Grid__Des}>
            <p>your reliable supplier of fresh fruit and vegetables</p>
            <div className={classes.Welcome__Grid__Des__Img}>
              <Image
                src="/imagenes/web/Recurso 62.png"
                alt="logo"
                width={5}
                height={110}
              />
            </div>
          </div>
          <div className={classes.Welcome__Grid__Des}>
            <p>Green manufacturing</p>
            <div className={classes.Welcome__Grid__Des__Img}>
              <Image
                src="/imagenes/web/Recurso 62.png"
                alt="logo"
                width={5}
                height={110}
              />
            </div>
          </div>
          <div className={classes.Welcome__Grid__Des}>
            <p>Large turnover of export to various countries of the world</p>
          </div>
        </div>
      </div>
    </>
  );
};
