import BottomWave from "../Components/wave/BottomWave";
import TopWave from "../Components/wave/TopWave";

import styled from 'styled-components'
const Header = styled.header`
  background-color: #000;
  height: 100vh;
  position: relative;
`
export default function Home() {
  return (
    <Header>
      <TopWave />
      <BottomWave />
    </Header>
  );
}
