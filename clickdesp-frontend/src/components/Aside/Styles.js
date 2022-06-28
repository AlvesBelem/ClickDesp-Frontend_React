import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 12.5rem;
  grid-area: AS;
  background-color: var(--background-aside);
  padding-left: 0 1.25rem;
  border-right: var(--white) solid 0.062rem;
`;

export const MenuContainer = styled.nav`
  margin-top: 2.62rem;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: var(--white);
  transition: opacity 0.3s;
  margin-top: 1.87rem;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    color: var(--light-yellow);
  }
  > svg {
    margin-right: 0.68rem;
  }
`;
