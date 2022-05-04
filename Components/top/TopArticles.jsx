import React from "react";
import styled from "styled-components";
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
  
`
const author = {
  name: 'Jan',
  surname: 'Novák',
  role: 'Web designer'
}
export default function TopArticles() {
  return (
    <Container>
      <Title>Top Articles</Title>
      <CardContainer>
      <CardContainerRow>
        <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
        <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
        <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
      </CardContainerRow>
      <CardContainerRow>
      <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
        <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
        <TopArticleCard title='CSS Design' description='This article is about css selectors ::before, ::after' author={author} category='design'/>
      </CardContainerRow>
      </CardContainer>
    </Container>
  );
}
