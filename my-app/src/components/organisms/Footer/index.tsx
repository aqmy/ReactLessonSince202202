import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <p>skyticket</p>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
`;
