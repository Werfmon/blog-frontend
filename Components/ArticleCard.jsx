import React, {useContext, useState} from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { goToArticle } from "../utils/goToArticle";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../pages";
import { isLogged } from "../utils/isLogged";

const Card = styled.div`
@media screen and (max-width: 450px) {
    min-width: 80vw;
    margin-left: 40px;
  }
  position: relative;
  min-height: 12rem;
  max-width: 28rem;
  min-width: 23rem;
  width: 36vw;
  background-color: #12131b;
  border-radius: 20px;
  margin: 2rem;
  color: #dbdbdb;
  padding: 1.5rem;
`;
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
`;
const Title = styled.h3`
  margin-bottom: 0.4rem;
  word-break: break-word;
`;
const Description = styled.p`
  color: #fffafa57;
  word-break: break-word;
`;
const FrameContainer = styled.div`
@media screen and (max-width: 450px) {
    position: static;
    margin-top: 10px;
  }
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 20px;
`;
const FrameChild = styled.div`
  display: flex;
  flex-direction: column;
`;
const FrameAuthorRole = styled.p`
  color: #fffafa57;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: #ffffff00;
  cursor: pointer;
  position: absolute;
  z-index: 30;
  width: 1.2rem;
  height: 1.2rem;
  left: -3px;
`
const ButtonContainer = styled.div`
position: relative;
`
export default function ArticleCard({ article, saved, liked, reload, setReload}) {
  const context = useContext(Context)
  function showArticle(e) {
    if (!(saved || liked)) {
      const articleUuid = e.target.attributes.value.value;
      goToArticle(articleUuid);
    }
  }
  function unSaveArticle(e) {
    const token = isLogged();
    if(token) {
      const userUuid = token.substr(36, 36);
      fetch(`${context.BACKEND}/app/user/article/un-save?article-uuid=${e.target.value}&user-uuid=${userUuid}`, {
        method: "DELETE",
        headers: {
          authorization: token
        }
      })
      .then(res => res.ok && setReload(!reload))
      .catch(err => console.error(err));
    }
  }
  function unLikeArticle(e) {
    const token = isLogged();
    if(token) {
      const userUuid = token.substr(36, 36);
      fetch(`${context.BACKEND}/app/user/article/un-like?article-uuid=${e.target.value}&user-uuid=${userUuid}`, {
        method: "DELETE",
        headers: {
          authorization: token
        }
      })
      .then(res => {res.ok && setReload(!reload)})
      .catch(err => console.error(err));
    }
  }


  return (
    <Card onClick={showArticle}>
      <TitleContainer>
        <Title>{article.article_title}</Title>
        {saved && (
          <ButtonContainer>

          <Button 
            value={article.article_uuid}
            onClick={e => unSaveArticle(e)}
          >
          </Button>
            <FontAwesomeIcon color="#fffffff8" size="1x" icon={faBookmark} />
          </ButtonContainer>
        )}
        {liked && (
          <ButtonContainer>

          <Button 
            value={article.article_uuid}
            onClick={e => unLikeArticle(e)}
          >
          </Button>
            <FontAwesomeIcon color="#fffffff8" size="1x" icon={faHeart} />
          </ButtonContainer>
        )}
      </TitleContainer>
      <Description>{article.article_description}</Description>
      <FrameContainer>
        <Avatar size={50} />
        <FrameChild>
          <p>{`${article.user_name} ${article.user_surname}`}</p>
          <FrameAuthorRole>{article.role_name}</FrameAuthorRole>
        </FrameChild>
      </FrameContainer>
      {saved || (
        <CardClick
          onClick={(e) => showArticle(e)}
          value={article.article_uuid}
        ></CardClick>
      )}
    </Card>
  );
}
