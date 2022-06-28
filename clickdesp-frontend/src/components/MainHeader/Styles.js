import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: var(--background-header);
  height: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0.62rem;
  border-bottom: var(--white) solid 1px;
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogImg = styled.img`
  margin-left: 2rem;
  width: 6.25rem;
`;

export const Title = styled.h1`
  color: var(--white);
  margin-left: 5rem;
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

export const ImgUser = styled.img`
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const UserName = styled.span`
  color: var(--light-yellow);
  margin-right: 15px;
`;
