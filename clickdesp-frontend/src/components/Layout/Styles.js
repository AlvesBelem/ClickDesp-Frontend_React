import styled from "styled-components";


export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 12.5rem auto;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    "MH MH"
    "AS CT";
`;
