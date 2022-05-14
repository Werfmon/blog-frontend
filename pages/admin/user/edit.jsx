import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../index";

import AdminNavbar from "../../../Components/Admin/AdminNavbar";
import { isLogged } from "../../../utils/isLogged";

const Main = styled.main`
  margin: 0 auto;
  width: 90%;
  position: relative;
`;
const Header = styled.header`
  padding: 20px 0 0 20px;
  h1 {
    color: #fff;
  }
`;
const Card = styled.div`
  min-width: 25rem;
  max-width: 30rem;
  margin: 20px;
  background-color: #12131b;
  border-radius: 30px;
  padding-bottom: 40px;
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
  justify-content: end;
  width: 100%;
`;
const HeadCard = styled.div`
  padding: 20px 0 32px 20px;
`;
const CardConteiner = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;
export default function edit() {
  const context = useContext(Context);
  const [roles, setRoles] = useState(null);
  const [oldUserData, setOldUserData] = useState(null);
  useEffect(() => {
    fetch(`${context.BACKEND}/api/role/all`)
      .then((res) => res.json())
      .then((data) => setRoles(data.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    const token = isLogged();
    const userUuid = token.substr(36, 36);
    fetch(`${context.BACKEND}/app/user/info/${userUuid}`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOldUserData(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function updateUser(e) {
    e.preventDefault();

    const token = isLogged();
    const userUuid = token.substr(36, 36);

    let data = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      role: parseInt(e.target.role.value),
      sex: e.target.sex.value,
    }
    console.log(data, userUuid);
    fetch(`${context.BACKEND}/app/user/${userUuid}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify(data)
    }).catch(err => console.error(err));
  }
  return (
    <>
      <AdminNavbar />
      <Header>
        <h1>Edit Profile</h1>
      </Header>
      <Main>
        <CardConteiner>
          <Card>
            <HeadCard>
              <Title>Update Profile</Title>
            </HeadCard>
            <Form onSubmit={updateUser}>
              <Input
                defaultValue={oldUserData ? oldUserData.user_name : ""}
                type="text"
                name="name"
                placeholder="Fist name"
                required
              />
              <Input
                type="text"
                name="surname"
                placeholder="last name"
                required
                defaultValue={oldUserData ? oldUserData.user_surname : ""}
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                defaultValue={oldUserData ? oldUserData.user_email : ""}
              />
              <Select
                name="role"
                required
                defaultValue={oldUserData ? oldUserData.user_role : 0}
              >
                {roles &&
                  roles.map((role, i) => (
                    <option key={i} value={role.id}>
                      {role.name}
                    </option>
                  ))}
              </Select>
              {oldUserData && (
                <Select name="sex" required defaultValue={oldUserData.user_sex}>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="other">Other...</option>
                </Select>
              )}
              <ButtonContainer>
                <Button>Update</Button>
              </ButtonContainer>
            </Form>
          </Card>
          <Card>
            <HeadCard>
              <Title>Update Password</Title>
            </HeadCard>
            <Form>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={12}
              />
              <Input
                type="password"
                name="passwordAgain"
                placeholder="Password again"
                required
                minLength={12}
              />
              <ButtonContainer>
                <Button>Update</Button>
              </ButtonContainer>
            </Form>
          </Card>
          <Card>
            <HeadCard>
              <Title>Delete Account</Title>
            </HeadCard>
            <Form>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={12}
              />
              <ButtonContainer>
                <Button>Delete</Button>
              </ButtonContainer>
            </Form>
          </Card>
        </CardConteiner>
      </Main>
    </>
  );
}
