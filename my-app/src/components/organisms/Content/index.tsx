import { FC } from "react";
import styled from "styled-components";

export const Content: FC = () => {
  return (
    <StContentWrap>
      <StContentH1>react初心者向け講座</StContentH1>
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
