import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Editor } from "draft-js";

import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
const Section = styled.section`
  margin: 0 auto;
  width: 55%;
  z-index: 2;
  position: relative;
  backdrop-filter: blur(40px);
  background-color: #1a1a1a56;
  padding: 45px;
  border-radius: 20px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (min-width: 700px) and (max-width: 900px) {
    width: 70%;
  }
`;
const ArticleText = styled.p`
  padding-top: 3rem;
  font-weight: 600;
  word-break: break-word;
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
const FrameLikes = styled.p`
  padding-left: 3px;
`;

const HeaderContainer = styled.div``;
const ArticleName = styled.h1`
  font-weight: 900;
  font-size: 2.8rem;
  word-break: break-word;
`;
const Description = styled.h2`
  font-size: 1rem;
  padding: 10px 4px;
  font-weight: 400;
  word-break: break-word;

`;

export default function ArticleSection({ articleData }) {
  const [state, setState] = useState(() => EditorState.createEmpty());
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    console.log(articleData.article_text);
    const blocksFromHTML = convertFromHTML(articleData.article_text);
    const stat = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setState(EditorState.createWithContent(stat));
    setReadTime(
      articleData.article_read_time?.m +
        Math.ceil(parseFloat("0." + articleData.article_read_time?.s))
    );
  }, [articleData]);

  return (
    <>
      <Section>
        <FrameContainer>
          <Avatar size={70} />
          <FrameChild>
            <p>{`${articleData.user_name} ${articleData.user_surname}`}</p>
            <FrameAuthorRole>{articleData.user_role}</FrameAuthorRole>
            <FrameReadTime>{readTime} min read</FrameReadTime>
          </FrameChild>
        </FrameContainer>
        {articleData.likes && <FrameLikes>{articleData.likes} {articleData.likes === 1 ? 'Like' : 'Likes'}</FrameLikes>}
        <HeaderContainer>
          <ArticleName>{articleData.article_name}</ArticleName>
          <Description>{articleData.article_description}</Description>
        </HeaderContainer>
        <ArticleText>
          {state && <Editor editorState={state} readOnly />}
        </ArticleText>
      </Section>
    </>
  );
}
