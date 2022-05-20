import NavBar from "../Components/NavBar";
import styled from "styled-components";
import HeaderSvgBlob from "../Components/HeaderSvgBlob";
import TopArticles from "../Components/top/TopArticles";
import ExploreMore from "../Components/ExploreMore";
import { createContext } from "react";

export const Context = createContext({
  BACKEND: "http://blogapi.thredex.eu"
});

const Header = styled.header`
  height: 100vh;
  position: relative;
`;
const HeaderContainer = styled.div`
  display: grid;
  place-items: center center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Text = styled.p`
  color: #fff;
  font-size: clamp(1rem, 7vw, 7rem);
  z-index: 10;
`;
const Span = styled.span`
  color: ${(props) => props.color};
`;

export default function Index() {
  return (
    <Context.Provider value={{BACKEND: "http://blogapi.thredex.eu"}}>
      <Header>
      <HeaderSvgBlob />
        <NavBar />
        <HeaderContainer>
          <Text>
            <Span color="#fff">Write. </Span>
            <Span color="#7C7C7C">Read. </Span>
            <Span color="#363636">Like.</Span>
          </Text>
        </HeaderContainer>
      </Header>
      <TopArticles />
      <ExploreMore />
    </Context.Provider>
  );
}