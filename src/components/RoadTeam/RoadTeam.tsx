import classes from "./RoadTeam.module.scss";
import Image from "next/image";
import Link from "next/link";

export const RoadTeam = () => {
  return (
    <>
      <div className={classes.RoadTeam}>
        <div className={classes.RoadTeam__Roadmap}>
          <div className={classes.RoadTeam__RoadmapTitle}>
            <h1>ROADMAP</h1>
          </div>

          <div className={classes.RoadTeam__RoadmapFechas}>
            <div className={classes.RoadTeam__RoadmapFechas__Container}>
              <div className={classes.RoadTeam__RoadmapFechas__Container__Text}>
                <h2>1</h2>
                <h5>
                  Q3 2022 ICO Alinti Coin Recruitment of international
                  ambassadors Marketing Phase 1
                </h5>
              </div>

              <div
                className={classes.RoadTeam__RoadmapFechas__Container__Poste}
              >
                <Image
                  src="/Imagenes/web/poste.png"
                  width={90}
                  height={370}
                  // layout="responsive" // DUDA
                  alt="inticoin-icon"
                />
              </div>
            </div>
            <div className={classes.RoadTeam__RoadmapFechas__Container}>
              <div className={classes.RoadTeam__RoadmapFechas__Container__Text}>
                <h2>2</h2>
                <h5>
                  Q3 2022 ICO Alinti Coin Recruitment of international
                  ambassadors Marketing Phase 1
                </h5>
              </div>

              <div
                className={classes.RoadTeam__RoadmapFechas__Container__Poste}
              >
                <Image
                  src="/Imagenes/web/poste.png"
                  width={90}
                  height={370}
                  // layout="responsive" // DUDA
                  alt="inticoin-icon"
                />
              </div>
            </div>
            <div className={classes.RoadTeam__RoadmapFechas__Container}>
              <div className={classes.RoadTeam__RoadmapFechas__Container__Text}>
                <h2>3</h2>
                <h5>
                  Q3 2022 ICO Alinti Coin Recruitment of international
                  ambassadors Marketing Phase 1
                </h5>
              </div>

              <div
                className={classes.RoadTeam__RoadmapFechas__Container__Poste}
              >
                <Image
                  src="/Imagenes/web/poste.png"
                  width={90}
                  height={370}
                  // layout="responsive" // DUDA
                  alt="inticoin-icon"
                />
              </div>
            </div>
            <div className={classes.RoadTeam__RoadmapFechas__Container}>
              <div className={classes.RoadTeam__RoadmapFechas__Container__Text}>
                <h2>4</h2>
                <h5>
                  Q3 2022 ICO Alinti Coin Recruitment of international
                  ambassadors Marketing Phase 1
                </h5>
              </div>

              <div
                className={classes.RoadTeam__RoadmapFechas__Container__Poste}
              >
                <Image
                  src="/Imagenes/web/poste.png"
                  width={90}
                  height={370}
                  // layout="responsive" // DUDA
                  alt="inticoin-icon"
                />
              </div>
            </div>
            <div className={classes.RoadTeam__RoadmapFechas__Container}>
              <div className={classes.RoadTeam__RoadmapFechas__Container__Text}>
                <h2>5</h2>
                <h5>
                  Q3 2022 ICO Alinti Coin Recruitment of international
                  ambassadors Marketing Phase 1
                </h5>
              </div>

              <div
                className={classes.RoadTeam__RoadmapFechas__Container__Poste}
              >
                <Image
                  src="/Imagenes/web/poste.png"
                  width={90}
                  height={370}
                  // layout="responsive" // DUDA
                  alt="inticoin-icon"
                />
              </div>
            </div>
          </div>

          <div className={classes.RoadTeam__RoadmapTierra}></div>
        </div>

        <div className={classes.RoadTeam__Equipo}>
          <div className={classes.RoadTeam__EquipoTitle}>
            <h1>EQUIPO</h1>
          </div>
          <div className={classes.RoadTeam__EquipoTeam}>
            {/* <div className={classes.RoadTeam__EquipoTeamAlinti}> */}
            {/* <div className={classes.RoadTeam__EquipoTeamList}> */}
            <Image
              src="/Imagenes/web/Recurso 64.png"
              width={150}
              height={150}
              // layout="responsive" // DUDA
              alt="inticoin-icon"
            />

            <Image
              src="/Imagenes/web/Recurso 64.png"
              width={150}
              height={150}
              // layout="responsive" // DUDA
              alt="inticoin-icon"
            />
          </div>
          <div className={classes.RoadTeam__EquipoTeamList}>
            {/* <Image
              src="/Imagenes/web/Recurso 63.png"
              width={324}
              height={286}
              // layout="responsive" // DUDA
              alt="inticoin-icon"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
