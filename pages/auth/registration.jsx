import React, {useContext} from "react";
import styled from "styled-components";
import BackButton from "../../Components/BackButton";
import { getToLoginPage } from "../../utils/getToLoginPage";
import { getToMainPage } from "../../utils/getToMainPage";
import {Context} from '../index';

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
`;
const Input = styled.input`
  background: #12131bb5;
  border: 2px solid #ffffff44;
  width: 100%;
  border-radius: 20px;
  height: 2rem;
  color: #fff;
  padding-left: 12px;
  transition: all 0.4s;
  &:focus {
    border-color: #ffffff80;
  }
`;
const Select = styled.select`
  background: #12131bb5;
  width: 100%;
  border-radius: 20px;
  height: 2rem;
  padding-left: 12px;
  transition: all 0.4s;
  border: 2px solid #ffffff44;
  color: #fff;
  & > option {
    color: #fff;
  }
  &:focus {
    border-color: #ffffff80;
  }
`;
const Button = styled.button`
  align-self: end;
  background: linear-gradient(100deg, #0505dbbd, #171768);
  width: 6rem;
  height: 2rem;
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  align-items: center;
  width: 80%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TextButton = styled.button`
  align-self: start;
  height: 2rem;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  background-color: unset;
  margin-left: 5px;
`;

const HeadCard = styled.div`
  padding: 20px 0 32px 20px;
`;

export default function registration() {
  const context = useContext(Context);
  function register(e) {
    e.preventDefault();

    let data = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      role: parseInt(e.target.role.value),
      sex: e.target.sex.value,
      password: e.target.password.value,
      passwordAgain: e.target.passwordAgain.value,
    }
    console.log(data);
    fetch(`${context.BACKEND}/auth/registration`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if(res.ok) {
        alert('Registrace byla úspěšná');
      }
    }).catch(err => console.error(err));
  }

  return (
    <Container>
      <Card>
        <HeadCard>
          <Title>Registration</Title>
          <BackButton action={getToMainPage} />
        </HeadCard>
        <Form onSubmit={register}>
          <Input type='text' name="name" placeholder="Fist name" required />
          <Input type='text' name="surname" placeholder="last name" required />
          <Input type='email' name="email" placeholder="E-mail" required />
          <Select name="role" required>
          {/**TODO: data brany s db */}
            <option value={1}>Programmer</option>
            <option value={2}>Designer</option>
            <option value={3}>Coder</option>
          </Select>
          <Select name="sex" required>
            <option value='man'>Man</option>
            <option value='woman'>Woman</option>
            <option value='other'>Other...</option>
          </Select>
          <Input type='password' name="password" placeholder="Password" required minLength={12}/>
          <Input type='password' name="passwordAgain" placeholder="Password again" required minLength={12}/>
          <ButtonContainer>
            <TextButton onClick={getToLoginPage}>Login</TextButton>
            <Button>Register</Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Container>
  );
}
