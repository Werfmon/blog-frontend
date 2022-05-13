import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  margin-left: 6rem;
`;
const Button = styled.button`
  background: linear-gradient(100deg, #0505dbbd, #171768);
  width: 9rem;
  height: 3rem;
  border-radius: 50px;
  color: #ffffff;
  font-size: 2rem;
  letter-spacing: 1px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  cursor: pointer;
`;
const Svg = styled.svg`
  z-index: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  margin-left: 1.3rem;
  margin-top: 1.3rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
  //TODO: media query, pri male sirce display: none
`;

export default function FindButton({ text }) {
  return (
    <ButtonContainer>
      <Button type="submit">{text}</Button>
      <Svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        fill="#0505dbbd"
        width={"15rem"}
        height={"15rem"}
        viewBox="0 0 52.966 52.966"
      >
        <path
          d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	S32.459,40,21.983,40z"
        />
      </Svg>
    </ButtonContainer>
  );
}
