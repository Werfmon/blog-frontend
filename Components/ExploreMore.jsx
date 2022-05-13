import React from "react";
import styled from "styled-components";
import Search from "./search/Search";

const Container = styled.section`
  padding-block: 5rem;
  background-color: #000;
  position: relative;
`;
const Title = styled.h2`
  color: #fff;
  font-size: clamp(2.5rem, 3vw, 4rem);
  font-weight: 100;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 5rem;
  filter: drop-shadow(4px 4px 0px #000);
  z-index: 10;
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

export default function ExploreMore() {
  return (
    <Container>
      <Title>Explore more!</Title>
      <Search />
    
    </Container>
  );
}
