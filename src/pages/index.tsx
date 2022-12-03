import type { NextPage } from "next";
import { Welcome } from "../components/Welcome/Welcome";
import { OurTecnologhy } from "../components/OurTecnologhy/OurTecnologhy";
import { Creator } from "../components/Creator/Creator";
import { Sponsor } from "../components/Sponsor/Sponsor";
import { Tokenomic } from "../components/Tokenomic/Tokenomic";
import { Swap } from "../components/Swap/Swap";
import { Cascada } from "../components/Cascada/Cascada";
import { RoadTeam } from "../components/RoadTeam/RoadTeam";

const Home: NextPage = () => {
  return (
    <div>
      <Cascada />
      <Welcome />
      <OurTecnologhy />
      <Creator />
      <Sponsor />
      <Tokenomic />
      <Swap />
      <RoadTeam />
    </div>
  );
};

export default Home;
