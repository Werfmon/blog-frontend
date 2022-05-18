import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import {getToLoginPage} from '../utils/getToLoginPage'
import {Context} from '../pages/index'
import {isLogged} from '../utils/isLogged'
import { logout } from "../utils/logout";
import { goToWriteArticle } from "../utils/goToWriteArticle";
import { goToAdmin } from "../utils/goToAdmin";
const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 20;
`;
const Logo = styled.h1`
  font-family: "Kalam", cursive;
  font-size: 2.4rem;
  font-weight: 100;
  color: #fff;
  padding-inline: 10px;
`;
const UserSection = styled.div`
  display: inherit;
  column-gap: 20px;
  padding-right: 20px;
`;
const LoginButton = styled.button`
  color: #fff;
  background-color: unset;
  font-size: 1.5rem;
  cursor: pointer;
`;
const LogoutButton = styled.button`
  background-color: unset;
  color: #fff;
  display: flex;
  justify-content: space-around;
  border-radius: 30px;
  align-items: center;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;
const WriteButton = styled.button`
  color: #fff;
  background-color: #16121200;
  font-size: 1.5rem;
  cursor: pointer;
`
const AvatarContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

export default function NavBar() {
  const [userLogged, setUserLogged] = useState(false);
  const context = useContext(Context);
  
  useEffect(() => {
    let token = isLogged();
    if(token !== false){
      let uuid = token.substr(36, 36);
      fetch(`${context.BACKEND}/app/user/${uuid}`, {
        method: "GET",
        headers: {
          'Authorization': token,
        }
      })
      .then(res => res.json())
      .then(data => {
        setUserLogged(true);
      })
      .catch(err => console.error(err));
    }
  }, [, context]);

  return (
    <Nav>
      <Logo>ProeniX</Logo>
      <UserSection>
        {userLogged ? (
          <>
            <WriteButton onClick={goToWriteArticle}>Write</WriteButton>
            <LogoutButton onClick={logout}>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2C0 0.9 0.9 0 2 0C2 0 4.66667 0 10 0V2H2V16H10V18C4.66667 18 2 18 2 18C0.9 18 0 17.1 0 16C0 6.62361 0 2 0 2ZM14.1758 8L11.6403 5.46447L13.0545 4.05025L18.0042 9L13.0545 13.9497L11.6403 12.5355L14.1758 10H7.59V8H14.1758Z"
                  fill="white"
                />
              </svg>
            </LogoutButton>
            <AvatarContainer onClick={goToAdmin}>
              <Avatar size="30"/>
            </AvatarContainer>
          </>
        ) : (
          <LoginButton onClick={getToLoginPage}>Login</LoginButton>
        )}
      </UserSection>
    </Nav>
  );
}
