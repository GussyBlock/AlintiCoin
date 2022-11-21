import type { NextPage } from "next";
import { OurTecnologhy } from "../components/OurTecnologhy/OurTecnologhy";
import { Creator } from "../components/Creator/Creator";
import { Sponsor } from "../components/Sponsor/Sponsor";
import { Tokenomic } from "../components/Tokenomic/Tokenomic";
import { RoadTeam } from "../components/RoadTeam/RoadTeam";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Welcome /> */}
      <OurTecnologhy />
      <Creator />
      <Sponsor />
      <Tokenomic />
      <RoadTeam />
    </div>
  );
};

export default Home;
