import styled from "styled-components";

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

const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function IntroductionVideo() {

    const VIDEO_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/video.mp4`

    return (
        <Container>
            <hgroup>
                <Title>Introduction video</Title>
                <p>Learn from the professional blogger</p>
            </hgroup>
            <VideoContainer>
                <video controls loop width="560" height="315">
                    <source src={VIDEO_URL} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </VideoContainer>
        </Container>
    );
}

export default IntroductionVideo;
