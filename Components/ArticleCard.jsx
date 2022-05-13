import React from 'react'
import styled from "styled-components";
import Avatar from './Avatar';
import {goToArticle} from '../utils/goToArticle'

const Card = styled.div`
  position: relative;
  height: 12rem;
  max-width: 28rem;
  min-width: 23rem;
  width: 36vw;
  background-color: #12131b;
  border-radius: 20px;
  margin: 2rem;
  color: #dbdbdb;
  padding: 1.5rem;
`
const CardClick = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 12rem;
  max-width: 28rem;
  min-width: 23rem;
  width: 36vw;
  background-color: #101d7c00;
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
`
const Title = styled.h3`
  margin-bottom: .4rem;
`
const Description = styled.p`
  color: #fffafa57;
`
const FrameContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 20px;
`
const FrameChild = styled.div`
  display: flex;
  flex-direction: column;
`
const FrameAuthorRole = styled.p`
  color: #fffafa57;
`

export default function ArticleCard({topArticle}) {

  function showArticle(e) {
    const articleUuid = e.target.attributes.value.value;
    goToArticle(articleUuid);
  }

  return (
    <Card onClick={showArticle}>
      <Title>{topArticle.article_title}</Title>
      <Description>{topArticle.article_description}</Description>
      <FrameContainer>
        <Avatar size={50}/>
        <FrameChild>
          <p>{`${topArticle.user_name} ${topArticle.user_surname}`}</p>
          <FrameAuthorRole>{topArticle.role_name}</FrameAuthorRole>
        </FrameChild>
      </FrameContainer>
      <CardClick onClick={e => showArticle(e)} value={topArticle.article_uuid}></CardClick>
    </Card>
  )
}
