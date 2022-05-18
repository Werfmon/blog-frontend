import React, {useContext, useState} from "react";
import styled from "styled-components";
import { Context } from "../../pages";
import ArticleCard from "../ArticleCard";
import FindButton from "./FindButton";

const Form = styled.form`
  height: 10rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  position: relative;
`;
const Input = styled.input`
  border-radius: 50px;
  border: 2px #393a3fe4 solid;
  font-size: 1.5rem;
  width: 30%;
  min-width: 20rem;
  height: 3rem;
  color: #fff;
  padding-left: 20px;
  padding-block: 5px;
  background: unset;
  letter-spacing: 1px;
  transition: all 0.4s;
  &::placeholder {
    color: #ffffff81;
    font-size: 1.9rem;
  }
  &:focus {
    border-color: #0505dbfd;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export default function Search() {
  const [articles, setArticles] = useState(null);
  const context = useContext(Context);

  function searchByArgs(e) {
    e.preventDefault();
    const searchText = e.target.search.value;

    fetch(`${context.BACKEND}/api/article/search?search=${searchText}`)
      .then(res => res.json())
      .then(data => setArticles(data.data))
      .catch(err => console.error(err));
  }

  return (
    <>
      <Form onSubmit={searchByArgs}>
        <Input type='text' name="search" placeholder="Search..." />
        <FindButton text="Find" />
      </Form>
      <CardContainer>
        {articles && articles.map((article, i) => <ArticleCard key={i} article={article} />)}
      </CardContainer>
    </>
  );
}
