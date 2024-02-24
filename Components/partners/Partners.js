import styled from "styled-components";
import Image from "next/image";

const Title = styled.h2`
  color: #fff;
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  font-weight: 100;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;
const Container = styled.section`
  padding-block: 5rem;
  background-color: #000;
`;
const Figure = styled.figure`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    gap: 15px;
`

function Partners() {

    return (
        <Container>
            <Title>Partner</Title>
            <Figure>
                <Image src={`/avatar.jpg`} height={300} width={300} alt="Trulli" style={{borderRadius: "50%"}}/>
                <figcaption>Long-term partner</figcaption>
            </Figure>
        </Container>
    );
}

export default Partners;
