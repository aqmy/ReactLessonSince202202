import type { NextPage } from "next";
import { Template } from "../components/templates";
import styled from "styled-components";
import { Content } from "components/organisms/Content";

const Home: NextPage = () => {
  return (
    <Template title="test">
      <Content />
    </Template>
  );
};

export default Home;
