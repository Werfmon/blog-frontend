import React, {useContext} from "react";
import {Context} from '../index';
import styled from "styled-components";
import BackButton from "../../Components/BackButton";
import { getToMainPage } from "../../utils/getToMainPage";
import { getToRegistrationPage } from '../../utils/getToRegistrationPage';
import {isLogged} from '../../utils/isLogged'
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
  flex-direction: row-reverse;
`
const HeadCard = styled.div`
  padding: 20px 0 32px 20px;
`;
export default function Login() {
  const context = useContext(Context);
  function login(e) {

    e.preventDefault();

    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    fetch(`${context.BACKEND}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      if(res.ok) {
        return res.json();
      }
    }).then(data => {
      if(data) {
        window.sessionStorage.setItem('token', data.data);
      }
      getToMainPage();
    })
  }

  return (
    <Container>
      <Card>
      <HeadCard>
          <Title>Login</Title>
          <BackButton action={getToMainPage} />
        </HeadCard>
        <Form onSubmit={login}>
          <Input type='email' name="email" placeholder='E-mail' />
          <Input type='password' name="password" placeholder='Password'/>
          <ButtonContainer>
            <Button>Login</Button>
            <TextButton onClick={getToRegistrationPage}>Not registered?</TextButton>
          </ButtonContainer>
        </Form>
      </Card>
    </Container>
  );
}
