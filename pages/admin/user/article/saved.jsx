import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../index";

import AdminNavbar from "../../../../Components/Admin/AdminNavbar";
import { isLogged } from "../../../../utils/isLogged";

const Main = styled.main``;
const Header = styled.header`
  padding: 20px 0 0 20px;
  h1 {
    color: #fff;
  }
`;

export default function saved() {
  const content = useContext(Context);
  const [savedArticles, setSavedArticles] = useState(null);
  useEffect(() => {
    const token = isLogged();
    if (token) {
      const userUuid = token.substr(36, 36);
      fetch(`${content.BACKEND}/app/user/article/saved?=${userUuid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          setSavedArticles(data.data);
        });
    }
  }, []);
  return (
    <>
      <AdminNavbar />
      <Header>
        <h1>Saved Articles</h1>
      </Header>
      <Main></Main>
    </>
  );
}
