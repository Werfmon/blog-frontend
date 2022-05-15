import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../../index";

import AdminNavbar from "../../../../../Components/Admin/AdminNavbar";
import { getToMainPage } from "../../../../../utils/getToMainPage";
import { isLogged } from "../../../../../utils/isLogged";
import { goToUpdateArticle } from "../../../../../utils/goToUpdateArticle";

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
export default function overview() {
  const context = useContext(Context);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
  }, []);
  useEffect(() => {
    const token = isLogged();
    if (!token) {
      getToMainPage();
    }
    const userUuid = token.substr(36, 36);

    fetch(`${context.BACKEND}/app/user/${userUuid}/articles`, {
      headers: {
        authorization: token
      }
    }).then(res => res.json())
      .then(data => setArticles(data.data))
      .catch(err => console.error(err));

  }, []);

  function deleteArticle(e) {
    e.preventDefault();
    const token = isLogged();
    const articleUuid = e.target.article.value;
    if(token) {
      fetch(`${context.BACKEND}/app/article/${articleUuid}`, {
        method: "DELETE",
        headers: {
          authorization: token
        }
      }).then(res => {
        if(res.ok) {
          alert('Article deleted');
        } else {
          alert('Something went wrong');
        }
      }).catch(err => console.error(err));
    }
  }
  function updateArticle(e) {
    e.preventDefault()
    const token = isLogged();
    if(token) {
      const articleUuid = e.target.article.value;
      goToUpdateArticle(articleUuid);
    }
    else {
      getToMainPage();
    }
  }
  return (
    <>
      <AdminNavbar />
      <Header>
        <h1>Edit Articles</h1>
      </Header>
      <Main>
        <CardConteiner>
          <Card>
            <HeadCard>
              <Title>Delete Article</Title>
            </HeadCard>
            <Form onSubmit={deleteArticle}>
              <Select name="article">
              <option>-</option>
                {articles && articles.map((article, i) => <option key={i} value={article.uuid}>{article.name}</option>)}
              </Select>
              <ButtonContainer>
                <Button>Delete</Button>
              </ButtonContainer>
            </Form>
          </Card>
          <Card>
            <HeadCard>
              <Title>Update Article</Title>
            </HeadCard>
            <Form onSubmit={updateArticle}>
              <Select name="article">
              <option>-</option>
                {articles && articles.map((article, i) => <option key={i} value={article.uuid}>{article.name}</option>)}
              </Select>
              <ButtonContainer>
                <Button>Update</Button>
              </ButtonContainer>
            </Form>
          </Card>
        </CardConteiner>
      </Main>
    </>
  );
}
