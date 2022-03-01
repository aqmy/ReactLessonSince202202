import { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <StHeaderRoot>
      <p>skyticket</p>
    </StHeaderRoot>
  );
};

const StHeaderRoot = styled.header`
  background-color: rgb(27, 161, 255);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
`;
