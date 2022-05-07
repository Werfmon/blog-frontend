import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 2rem;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  background-color: unset;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;
const Svg = styled.svg`
  margin-right: 5px;
`;

export default function BackButton(props) {
  return (
    <Button style={props.style} onClick={props.action}>
      <Svg
        width="10"
        height="12"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4222 16.7043L3.81408 8.99985L15.4222 1.29567L14.1373 0L0.577881 8.99985L14.1373 18L15.4222 16.7043Z"
          fill="white"
        />
      </Svg>
      Back
    </Button>
  );
}
