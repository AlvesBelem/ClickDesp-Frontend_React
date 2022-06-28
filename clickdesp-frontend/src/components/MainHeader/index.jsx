import React from "react";
import {
  Container,
  LogImg,
  Header,
  Title,
  ImgUser,
  UserName,
  DivUser,
} from "./styles";
import Logo from "../../assets/logo.svg";
import UserImg from "../../assets/marcelo.png";

export const MainHeader = () => {
  return (
    <Container>
      <Header>
        <LogImg src={Logo} alt="Logo do sistema ClickDesp" />
        <Title>Home</Title>
        <DivUser>
          <UserName>Marcelo Alves</UserName>
          <ImgUser src={UserImg} alt="Foto usuário" />
        </DivUser>
      </Header>
    </Container>
  );
};
