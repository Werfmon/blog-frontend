import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../pages";
import TopArticleCard from "../ArticleCard";

const Title = styled.h2`
  color: #fff;
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  font-weight: 100;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;
const Container = styled.section`
  padding-block: 5rem;
  background-color: #000;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CardContainerRow = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Loading = styled.div`
  color: #fff;
  height: 4rem;
  width: 4rem;
  border-radius: 50px;
  border: 5px solid #fff;
  border-top: 5px solid #000;
  animation: infinite;
  animation-name: loading;
  animation-play-state: running;
  animation-timing-function: ease;
  animation-duration: 2s;
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function TopArticles() {
  const [topArticle, setTopArticle] = useState(null);
  const COUNT_ARTICLE = 6;
  const context = useContext(Context);
  useEffect(() => {
    fetch(`${context.BACKEND}/api/article-top?top=${COUNT_ARTICLE}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setTopArticle(data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container>
      <Title>Top Articles</Title>
      <CardContainer>
        {topArticle ? (
          <>
            <CardContainerRow>
              {topArticle[0] && <TopArticleCard topArticle={topArticle[0]} />}
              {topArticle[1] && <TopArticleCard topArticle={topArticle[1]} />}
              {topArticle[2] && <TopArticleCard topArticle={topArticle[2]} />}
            </CardContainerRow>
            <CardContainerRow>
              {topArticle[0] && <TopArticleCard topArticle={topArticle[0]} />}
              {topArticle[1] && <TopArticleCard topArticle={topArticle[1]} />}
              {topArticle[2] && <TopArticleCard topArticle={topArticle[2]} />}
            </CardContainerRow>
          </>
        ) : (
          <Loading></Loading>
        )}
      </CardContainer>
    </Container>
  );
}
