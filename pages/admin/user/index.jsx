import React, {useEffect} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUser,
  faHeart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { goToBookmarkedArticle } from "../../../utils/goToBookmarkedArticle";
import { goToEditUser } from "../../../utils/goToEditUser";
import { goToLikedArticle } from "../../../utils/goToLikedArticle";
import { goToArticleOverview } from "../../../utils/goToArticleOverview";
import { isLogged } from "../../../utils/isLogged";
import { getToMainPage } from "../../../utils/getToMainPage";

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 80vh;
  gap: 2rem;
`;
const IconFrame = styled.div`
  background-color: #161824;
  padding: 40px;
  border-radius: 20px;

  cursor: pointer;
`;
const Header = styled.header`
  h1 {
    color: #fff;
    text-align: center;
    margin-top: 30px;
    font-size: 4rem;
  }
`;
export default function Index() {
  useEffect(() => {
    if(!isLogged()) {
      getToMainPage();
    }
  }, [])
  return (
    <>
      <Header>
        <h1>Admin Panel</h1>
      </Header>
      <Main>
        <IconFrame onClick={goToEditUser}>
          <FontAwesomeIcon color="#fffffff8" size="5x" icon={faUser} />
        </IconFrame>
        <IconFrame onClick={goToArticleOverview}>
          <FontAwesomeIcon color="#fffffff8" size="5x" icon={faPenToSquare} />
        </IconFrame>
        <IconFrame onClick={goToLikedArticle}>
          <FontAwesomeIcon color="#fffffff8" size="5x" icon={faHeart} />
        </IconFrame>
        <IconFrame onClick={goToBookmarkedArticle}>
          <FontAwesomeIcon color="#fffffff8" size="5x" icon={faBookmark} />
        </IconFrame>
      </Main>
    </>
  );
}
