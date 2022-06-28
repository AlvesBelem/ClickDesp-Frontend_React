import React from "react";
import { Aside } from "../Aside";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import { Container } from "./Styles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};
