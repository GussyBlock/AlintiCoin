import type { NextPage } from "next";
import { Welcome } from "../components/Welcome/Welcome";
import { OurTecnologhy } from "../components/OurTecnologhy/OurTecnologhy";
import { Creator } from "../components/Creator/Creator";
import { Sponsor } from "../components/Sponsor/Sponsor";
import { Tokenomic } from "../components/Tokenomic/Tokenomic";
import { Swap } from "../components/Swap/Swap";

const Home: NextPage = () => {
  return (
    <div>
      <Welcome />
      <OurTecnologhy />
      <Creator />
      <Sponsor />
      <Tokenomic />
      <Swap />
    </div>
  );
};

export default Home;
