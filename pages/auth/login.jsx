import React from "react";
import styled from "styled-components";
import BackButton from "../../Components/BackButton";
import { getToMainPage } from "../../utils/getToMainPage";
import { getToRegistrationPage } from '../../utils/getToRegistrationPage';

const Card = styled.div`
  margin: 0 auto;
  min-width: 25rem;
  max-width: 30rem;
  background-color: #12131b;
  border-radius: 30px;
  padding-bottom: 40px;
`;
const Container = styled.div`
  min-height: 100vh;
  background-color: #000;
  display: grid;
  place-items: center center;
`;
const Title = styled.h2`
  color: #fff;
  font-weight: 100;

`
const Input = styled.input`
  background: #12131bb5;
  border: 2px solid #ffffff44;
  width: 100%;
  border-radius: 20px;
  height: 2rem;
  color: #fff;
  padding-left: 12px;
  transition: all .4s;
  &:focus{
    border-color: #ffffff80;
  }
`
const Button = styled.button`
  align-self: end;
  background: linear-gradient(100deg,  #0505dbbd, #171768);
  width: 6rem;
  height: 2rem;
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
`
const TextButton = styled.button`
  align-self: start;
  width: 6rem;
  height: 2rem;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  background-color: unset;
  margin-left: 5px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  align-items: center;
  width: 80%;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const HeadCard = styled.div`
  padding: 20px 0 32px 20px;
`;
const Svg = styled.svg`
  margin-right: 5px;
`
export default function login() {
  return (
    <Container>
      <Card>
      <HeadCard>
          <Title>Login</Title>
          <BackButton action={getToMainPage}>
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
          </BackButton>
        </HeadCard>
        <Form onSubmit={() => {}}>
          <Input placeholder='E-mail' />
          <Input placeholder='Password'/>
          <ButtonContainer>
            <TextButton onClick={getToRegistrationPage}>Not registered?</TextButton>
            <Button>Login</Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Container>
  );
}
