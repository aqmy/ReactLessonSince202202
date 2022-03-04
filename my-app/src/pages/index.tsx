import type { NextPage } from "next";
import { Template } from "../components/templates";
import { Content } from "src/components/organisms/Content";

const Home: NextPage = () => {
  return (
    <Template title="test">
      <Content />
    </Template>
  );
};

export default Home;
