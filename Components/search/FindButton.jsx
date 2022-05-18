import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  margin-left: 6rem;
  @media screen and (max-width: 500px) and (min-width: 0) {
   margin-left: 0;
   width: 100%;
  }
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
  @media screen and (max-width: 600px) and (min-width: 0px) {
    width: 7rem;
    font-size: 1.4rem;
    height: 2rem;
    margin-left: -20px;
  }
  @media screen and (max-width: 500px) and (min-width: 0) {
   margin-left: 0;
  }
`;

export default function FindButton({ text }) {
  return (
    <ButtonContainer>
      <Button type="submit">{text}</Button>
    </ButtonContainer>
  );
}
