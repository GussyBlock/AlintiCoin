import React, { useState, useRef, useEffect } from "react";
import classes from "./BurgerJS.module.scss";
import Image from "next/image";
import Link from "next/link";

export const BurgerJS = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMounted1, setIsMounted1] = useState(false);
  const [isMounted2, setIsMounted2] = useState(false);
  const [isMounted3, setIsMounted3] = useState(false);
  const [isMounted4, setIsMounted4] = useState(false);
  const ref = useRef<any>(null);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const ref4 = useRef<any>(null);

  useEffect(() => {
    isMounted
      ? ref.current?.classList.add(classes.visibleMenu)
      : ref.current?.classList.remove(classes.visibleMenu);
    isMounted1
      ? ref1.current?.classList.add(classes.visible)
      : ref1.current?.classList.remove(classes.visible);
    isMounted2
      ? ref2.current?.classList.add(classes.visible)
      : ref2.current?.classList.remove(classes.visible);
    isMounted3
      ? ref3.current?.classList.add(classes.visible)
      : ref3.current?.classList.remove(classes.visible);
    isMounted4
      ? ref4.current?.classList.add(classes.visible)
      : ref4.current?.classList.remove(classes.visible);
  }, [isMounted, isMounted1, isMounted2, isMounted3, isMounted4]);

  return (
    <>
      <div className={classes.BurgerJS}>
        <div className={classes.BurgerJS__Menu}>
          <div className={classes.BurgerJS__MenuIconMenu}>
            <Image
              src="/svg/header.svg"
              alt="logo"
              width={50}
              height={50}
              // layout="responsive" //DUDA
              onClick={() => setIsMounted(!isMounted)}
              className={classes.BurgerJS__Gris}
            />
          </div>

          <div className={classes.BurgerJS__MenuIconAli}>
            <Link href="/">
              <a>
                <Image
                  src="/imagenes/web/Alinti-verde-final.png"
                  alt="Firulaix"
                  width={50}
                  height={50}
                  layout="responsive" //DUDA
                  className={classes.BurgerJS__Gris}
                />
              </a>
            </Link>
          </div>

          {/* <div className={classes.svgwrapper}>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
              <div id="text">
                <a href="">
                  <span className={classes.spot}></span>
                  Conectar Wallet
                </a>
              </div>
            </svg>
          </div> */}

          <nav ref={ref} className={classes.nav}>
            <ul className={classes.list}>
              {/* LI1 */}
              <li className={classes.list__item}>
                <div className={classes.list__button}>
                  <Image
                    src="/svg/menu.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    onClick={() => setIsMounted4(!isMounted4)}
                  />
                  <Link href="/">
                    <a onClick={() => setIsMounted4(!isMounted4)}>Home</a>
                  </Link>
                  <div className={classes.list__button__arrow}>
                    <Image
                      src="/svg/flecha.svg"
                      alt="logo"
                      width={15}
                      height={15}
                      onClick={() => setIsMounted4(!isMounted4)}

                      // layout="responsive" //DUDA
                    />
                  </div>
                </div>
                <ul ref={ref4} className={classes.list__item__show}>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Our Technology</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Partnerships</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LI2 */}
              <li className={classes.list__item}>
                <div className={classes.list__button}>
                  <Image
                    src="/svg/bock.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    onClick={() => setIsMounted1(!isMounted1)}
                    // layout="responsive" //DUDA
                  />
                  <Link href="/">
                    <a onClick={() => setIsMounted1(!isMounted1)}>CROWDSALE</a>
                  </Link>
                  <div className={classes.list__button__arrow}>
                    <Image
                      src="/svg/flecha.svg"
                      alt="logo"
                      width={15}
                      height={15}
                      onClick={() => setIsMounted1(!isMounted1)}

                      // layout="responsive" //DUDA
                    />
                  </div>
                </div>
                <ul ref={ref1} className={classes.list__item__show}>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Buy</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Tokenomic</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Roapmap</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LI3 */}
              <li className={classes.list__item}>
                <div className={classes.list__button}>
                  <Image
                    src="/svg/est.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    onClick={() => setIsMounted2(!isMounted2)}

                    // layout="responsive" //DUDA
                  />
                  <Link href="/">
                    <a onClick={() => setIsMounted2(!isMounted2)}>EARN</a>
                  </Link>
                  <div className={classes.list__button__arrow}>
                    <Image
                      src="/svg/flecha.svg"
                      alt="logo"
                      width={15}
                      height={15}
                      onClick={() => setIsMounted2(!isMounted2)}
                      // layout="responsive" //DUDA
                    />
                  </div>
                </div>
                <ul ref={ref2} className={classes.list__item__show}>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Lock Staking</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Farming</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Farming</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LI4 */}
              <li className={classes.list__item}>
                <div className={classes.list__button}>
                  <Image
                    src="/svg/not.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    onClick={() => setIsMounted3(!isMounted3)}
                    // layout="responsive" //DUDA
                  />
                  <Link href="/">
                    <a onClick={() => setIsMounted3(!isMounted3)}>ABOUT</a>
                  </Link>
                  <div className={classes.list__button__arrow}>
                    <Image
                      src="/svg/flecha.svg"
                      alt="logo"
                      width={15}
                      height={15}
                      onClick={() => setIsMounted3(!isMounted3)}
                      // layout="responsive" //DUDA
                    />
                  </div>
                </div>
                <ul ref={ref3} className={classes.list__item__show}>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Descripcion</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Team</a>
                    </Link>
                  </li>
                  <li className={classes.list__inside}>
                    <Link href="/">
                      <a className={classes.nav__link}>Team</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* LI5 */}
              <li className={classes.list__item}>
                <div className={classes.list__button}>
                  <Image
                    src="/svg/cont.svg"
                    alt="logo"
                    width={15}
                    height={15}
                    // layout="responsive" //DUDA
                  />
                  <Link href="/">
                    <a>ALINTIWIKI</a>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
