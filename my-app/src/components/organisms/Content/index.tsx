import { FC } from "react";
import styled from "styled-components";

type Props = {
  h1text: string;
};

export const Content: FC<Props> = ({ h1text }) => {
  return (
    <StContentWrap>
      <StContentH1>{h1text}</StContentH1>
    </StContentWrap>
  );
};

const StContentWrap = styled.div`
  background-color: rgb(240, 240, 240);
  padding: 40px 20px;
  height: 1000px;
`;
const StContentH1 = styled.h1`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 30px;
  width: 100%;
  min-height: 80px;
  padding: 20px 10px;
  border: 1px solid grey;
  border-radius: 3px;
`;
