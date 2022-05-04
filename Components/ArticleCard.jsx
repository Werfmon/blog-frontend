import React from 'react'
import styled from "styled-components";
import Avatar from './Avatar';

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
export default function ArticleCard(props) {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <FrameContainer>
        <Avatar size={50}/>
        <FrameChild>
          <p>{`${props.author?.name} ${props.author?.surname}`}</p>
          <FrameAuthorRole>{props.author?.role}</FrameAuthorRole>
        </FrameChild>
      </FrameContainer>
    </Card>
  )
}
