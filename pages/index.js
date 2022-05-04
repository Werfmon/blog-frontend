import BottomWave from "../Components/wave/BottomWave";
import TopWave from "../Components/wave/TopWave";
import NavBar from '../Components/NavBar'
import styled from 'styled-components'
import Image from 'next/image'
import Laptop from '../public/laptop.png'

const Header = styled.header`
  background-color: #000;
  height: 100vh;
  position: relative;
`
const HeaderContainer = styled.div`
  display: grid;
  /* grid-template-columns: 70% 30%; */
  place-items: center center;
  height: 100vh;
  width: 100vw;
  position: relative;
`
const Text = styled.p`
  color: #fff;
  font-size: clamp(1rem, 7vw, 7rem);
`
const Span = styled.span`
  color: ${props => props.color};
`
// const ImageContainer = styled.div`
//   justify-self: end;
// `

export default function Home() {
  return (
    <Header>
      <NavBar />
      <HeaderContainer>
        <Text>
          <Span color="#fff">Write. </Span>
          <Span color="#7C7C7C">Read. </Span>
          <Span color="#363636">Like.</Span>
        </Text>
        {/* <ImageContainer>
          <Image src={Laptop} />
        </ImageContainer> */}
      </HeaderContainer>
    </Header>
  );
}
