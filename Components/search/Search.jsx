import React from "react";
import styled from "styled-components";
import FindButton from "./FindButton";

const Container = styled.div`
  height: 10rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  position: relative;
`;
const Input = styled.input`
  border-radius: 50px;
  border: 2px #393a3fe4 solid;
  font-size: 1.5rem;
  width: 30%;
  min-width: 20rem;
  height: 3rem;
  color: #fff;
  padding-left: 20px;
  padding-block: 5px;
  background: unset;
  letter-spacing: 1px;
  transition: all .4s;
  &::placeholder {
    color: #ffffff81;
    font-size: 1.9rem;
  }
  &:focus {
    border-color: #0505dbfd;
  }
`;

export default function Search() {
  return (
    <Container>
      <Input placeholder="Search..." />
        <FindButton text="Find" />
    </Container>
  );
}
