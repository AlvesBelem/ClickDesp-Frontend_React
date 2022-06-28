import React from "react";
import { Link } from "react-router-dom";
import {
  Gauge,
  House,
  Paperclip,
  SignOut,
  Truck,
  User,
  Wrench,
} from "phosphor-react";
import { Container, MenuContainer, MenuItemLink } from "./styles";

export const Aside = () => {
  return (
    <Container>
      <MenuContainer>
        <Link to="/">
          <MenuItemLink>
            <House size={25} weight="duotone" />
            Home
          </MenuItemLink>
        </Link>
        <Link to="/dashboard">
          <MenuItemLink>
            <Gauge size={25} weight="duotone" />
            Dashboard
          </MenuItemLink>
        </Link>
        <Link to="/clients">
          <MenuItemLink>
            <User size={25} weight="duotone" />
            Clientes
          </MenuItemLink>
        </Link>
        <Link to="/vehicles">
          <MenuItemLink>
            <Truck size={25} weight="duotone" />
            Veículos
          </MenuItemLink>
        </Link>
        <Link to="/services">
          <MenuItemLink>
            <Wrench size={25} weight="duotone" />
            Serviços
          </MenuItemLink>
        </Link>
        <Link to="/budgets">
          <MenuItemLink>
            <Paperclip size={25} weight="duotone" />
            Orçamentos
          </MenuItemLink>
        </Link>
        <Link to="/signup">
          <MenuItemLink>
            <SignOut size={25} weight="duotone" />
            Sair
          </MenuItemLink>
        </Link>
      </MenuContainer>
    </Container>
  );
};
