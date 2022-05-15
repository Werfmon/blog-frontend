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
const SavedParagraph = styled.p`
  color: #fff;
  position: absolute;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export default function saved() {
  const content = useContext(Context);
  const [savedArticles, setSavedArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const token = isLogged();
    if (token) {
      const userUuid = token.substr(36, 36);
      fetch(`${content.BACKEND}/app/user/article/saved?uuid=${userUuid}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSavedArticles(data.data);
        });
    } else {
      getToMainPage();
    }
  }, [, reload]);
  return (
    <>
      <AdminNavbar />
      <Header>
        <h1>Saved Articles</h1>
      </Header>
      <Main>
        {savedArticles &&
          savedArticles.map((savedArticle, i) => (
            <ArticleCard key={i} reload={reload} setReload={setReload} saved article={savedArticle} />
          ))}
      </Main>
      {savedArticles.length === 0 && <SavedParagraph>Nothing To Show</SavedParagraph>}
    </>
  );
}
