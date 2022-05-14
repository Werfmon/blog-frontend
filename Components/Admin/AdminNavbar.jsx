import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUser,
  faHeart,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { goToArticleOverview } from "../../utils/goToArticleOverview";
import { goToLikedArticle } from "../../utils/goToLikedArticle";
import { goToBookmarkedArticle } from "../../utils/goToBookmarkedArticle";
import { goToEditUser } from "../../utils/goToEditUser";

const Nav = styled.nav`
  transform: translateY(-50%);
  left: 0;
  top: 50%;
  position: absolute;
  height: 15rem;
  width: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #242526;
  border-radius: 0 10px 10px 0;
`;
const IconFrame = styled.div`
  background-color: #111010;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  padding: 10px;
  transition: all .4s;
  &:hover{
  background-color: #0527ec;
      
  }

  cursor: pointer;
`;

export default function AdminNavbar() {
  return (
    <Nav>
        <IconFrame onClick={goToEditUser}>
          <FontAwesomeIcon color="#fffffff8" size="1x" icon={faUser} />
        </IconFrame>
        <IconFrame onClick={goToArticleOverview}>
          <FontAwesomeIcon color="#fffffff8" size="1x" icon={faPenToSquare} />
        </IconFrame>
        <IconFrame onClick={goToLikedArticle}>
          <FontAwesomeIcon color="#fffffff8" size="1x" icon={faHeart} />
        </IconFrame>
        <IconFrame onClick={goToBookmarkedArticle}>
          <FontAwesomeIcon color="#fffffff8" size="1x" icon={faBookmark} />
        </IconFrame>
    </Nav>
  );
}
