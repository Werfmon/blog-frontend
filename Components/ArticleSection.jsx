import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Section = styled.section`
  margin: 0 auto;
  width: 55%;
  z-index: 2;
  position: relative;
  backdrop-filter: blur(40px);
  background-color: #1a1a1a56;
  padding: 45px;
  border-radius: 20px;
  @media screen and (max-width: 700px){
    width: 90%;
  }
  @media screen and (min-width: 700px) and (max-width: 900px){
    width: 70%;
  }
`;
const ArticleText = styled.p`
  padding-top: 3rem;
  font-weight: 600;
`;
const FrameContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const FrameChild = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const FrameAuthorRole = styled.p`
  color: #acacac;
`;
const FrameReadTime = styled.p`
  bottom: 0;
  position: absolute;
`;
const author = {
  name: "Jan",
  surname: "Novák",
  role: "Web designer",
};
const article = {
  readTime: 5,
  name: "Transport Layer",
  description: "Difference between UDP and TCP",
};
const HeaderContainer = styled.div``;
const ArticleName = styled.h1`
  font-weight: 900;
  font-size: 2.8rem;
`;
const Description = styled.h2`
  font-size: 1rem;
  padding: 10px 0;
  font-weight: 400;
`;

export default function ArticleSection() {
  // const [state, setState] = useState(
  //   () => EditorState.createEmpty()
  // )
  // useEffect(() => {
  //   fetch()
  //   //TODO: converting html to editor state
  //   const blocksFromHTML = convertFromHTML(data.text);
  //   const stat = ContentState.createFromBlockArray(
  //           blocksFromHTML.contentBlocks,
  //           blocksFromHTML.entityMap,
  //         );
  //   setState(EditorState.createWithContent(stat))
  // }, []);


  return (
    <>
    <Section>
      <FrameContainer>
        <Avatar size={70} />
        <FrameChild>
          <p>{`${author.name} ${author.surname}`}</p>
          <FrameAuthorRole>{author.role}</FrameAuthorRole>
          <FrameReadTime>{article.readTime} min read</FrameReadTime>
        </FrameChild>
      </FrameContainer>
      <HeaderContainer>
        <ArticleName>{article.name}</ArticleName>
        <Description>{article.description}</Description>
      </HeaderContainer>
      <ArticleText>
        {/* <Editor editorState={state} /> */}
              
      </ArticleText>
    </Section>

    </>
  );
}
