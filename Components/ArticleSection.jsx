import React from "react";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt
        perferendis asperiores, quidem voluptate, commodi, qui dolores dolor
        nobis error dolorum architecto cupiditate eos optio ex sunt quis! Aut
        recusandae autem consectetur unde molestias architecto delectus
        repudiandae voluptate, culpa incidunt voluptatibus odit magni quas
        inventore soluta velit, iste aliquam! Harum voluptas cumque tempora
        <br />
        <br />
        optio sapiente velit. Deleniti error hic adipisci amet aut, ullam quas
        iste accusantium ad autem eveniet ipsa asperiores neque, numquam in
        natus temporibus iure. Quisquam ipsum dignissimos repellat quis sint
        rerum laudantium neque, nobis architecto cumque obcaecati illum, enim
        facilis consectetur quaerat eveniet quas libero eos voluptas, quos dicta
        nostrum mollitia. Assumenda veritatis reiciendis consequuntur quas,
        nobis nemo ex illo, veniam, eligendi at sint ducimus aliquid! Expedita
        error, laudantium exercitationem aspernatur tempora, maxime praesentium
        quas reiciendis, fugiat modi illo. Ex voluptas atque totam molestias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt
        perferendis asperiores, quidem voluptate, commodi, qui dolores dolor
        nobis error dolorum architecto cupiditate eos optio ex sunt quis! Aut
        recusandae autem consectetur unde molestias architecto delectus
        <br />
        <br />
        repudiandae voluptate, culpa incidunt volup Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nulla nesciunt perferendis asperiores,
        quidem voluptate, commodi, qui dolores dolor nobis error dolorum
        architecto cupiditate eos optio ex sunt quis! Aut recusandae autem
        consectetur unde molestias architecto delectus repudiandae voluptate,
        culpa incidunt voluptatibus odit magni quas inventore soluta velit, iste
        aliquam! Harum voluptas cumque tempora optio sapiente velit. Deleniti
        error hic adipisci amet aut, ullam quas iste accusantium ad autem
        eveniet ipsa asperiores neque, numquam in natus temporibus iure.
        Quisquam ipsum dignissimos repellat quis sint rerum laudantium neque,
        nobis architecto cumque obcaecati illum, enim facilis consectetur
        quaerat eveniet quas libero eos voluptas, quos dicta nostrum mollitia.
        Assumenda veritatis reiciendis consequuntur quas, nobis nemo ex illo,
        veniam, eligendi at sint ducimus aliquid! Expedita error, laudantium
        exercitationem aspernatur tempora, maxime praesentium quas reiciendis,
        fugiat modi illo. Ex voluptas atque totam molestias.tatibus odit magni
        quas inventore soluta velit, iste aliquam! Harum voluptas cumque tempora
        optio sapiente velit. Deleniti error hic adipisci amet aut, ullam quas
        iste accusantium ad autem eveniet ipsa asperiores neque, numquam in
        <br />
        <br />
        natus temporibus iure. Quisquam ipsum dignissimos repellat quis sint
        rerum laudantium neque, nobis architecto cumque obcaecati illum, enim
        facilis consectetur quaerat eveniet quas libero eos voluptas, quos dicta
        nostrum mollitia. Assumenda veritatis reiciendis consequuntur quas,
        nobis nemo ex illo, veniam, eligendi at sint ducimus aliquid! Expedita
        error, laudantium exercitationem aspernatur tempora, maxime praesentium
        quas reiciendis, fugiat modi illo. Ex voluptas atque totam molestias.
        Vitae animi maiores inventore quaerat autem quae sit nostrum facere
        voluptates ab rerum velit molestias cum repudiandae, nisi accusantium
        impedit quod minima esse quis expedita, voluptatibus dolores quo.
        Aspernatur consequatur molestias voluptate in, placeat eaque. Veritatis
        at laboriosam inventore nesciunt quia omnis, odio enim. Accusantium
        voluptatibus error doloremque consectetur totam atque fuga nam eos
        laudantium alias, reiciendis ipsam ipsa molestias est possimus. Aperiam?
      </ArticleText>
    </Section>

    </>
  );
}
