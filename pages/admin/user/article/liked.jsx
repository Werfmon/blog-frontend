import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../index";

import AdminNavbar from "../../../../Components/Admin/AdminNavbar";
import { isLogged } from "../../../../utils/isLogged";
import ArticleCard from "../../../../Components/ArticleCard";
import { getToMainPage } from "../../../../utils/getToMainPage";

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
const LikedParagraph = styled.p`
  color: #fff;
  position: absolute;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export default function Liked() {
  const content = useContext(Context);
  const [reload, setReload] = useState(false);
  const [likedArticles, setLikedArticles] = useState([]);
  useEffect(() => {
    if(!isLogged()) {
      getToMainPage();
    }
  }, [])
  useEffect(() => {
    const token = isLogged();
    if (token) {
      const userUuid = token.substr(36, 36);
      fetch(`${content.BACKEND}/app/user/article/liked?uuid=${userUuid}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => setLikedArticles(data.data))
        .catch(err => console.error(err));
    }
  }, [, reload]);
  return (
    <>
      <AdminNavbar />
      <Header>
        <h1>Liked Articles</h1>
      </Header>
      <Main>
        {likedArticles &&
          likedArticles.map((likedArticles, i) => (
            <ArticleCard
              key={i}
              reload={reload}
              setReload={setReload}
              liked
              article={likedArticles}
            />
          ))}
      </Main>
      {likedArticles.length === 0 && (
        <LikedParagraph>Nothing To Show</LikedParagraph>
      )}
    </>
  );
}
