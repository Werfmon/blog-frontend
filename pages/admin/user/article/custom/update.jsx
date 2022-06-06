import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { isLogged } from "../../../../../utils/isLogged";
import { getToMainPage } from "../../../../../utils/getToMainPage";
import { Context } from "../../../../index";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import Head from "next/head";
import { goToAdmin } from "../../../../../utils/goToAdmin";

const EditorWysiwyg = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
const EditorContainer = styled.div`
  width: 80%;
  min-width: 20rem;
  height: 100%;
`;
const Form = styled.form`
  z-index: 15;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  min-height: 100vh;
  z-index: 10;
  padding-bottom: 20px;
  background-color: #000;
  color: #fff;
`;
const Input = styled.input`
  width: 80%;
  background-color: #53535329;
  min-width: 20rem;
  color: #fff;
  padding: 10px;
  height: 2rem;
`;
const Textarea = styled.textarea`
  resize: vertical;
  padding: 10px;
  min-height: 2rem;
  width: 80%;
  background-color: #53535329;
  min-width: 20rem;
  color: #fff;
`;
const FormTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 2rem;
`;
const Label = styled.label`
  width: 8rem;
`;
const ArticleHeader = styled.h1`
  text-align: center;
  background-color: #000;
  color: #fff;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;
const ShareButton = styled.button`
  width: 6rem;
  background: linear-gradient(100deg, #0505dbbd, #171768);
  height: 2.5rem;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`;
const ShareButtonContaineer = styled.div`
  width: calc(80% + 8rem);
  margin: 0 auto;
  display: flex;
  justify-content: end;
`;
const Select = styled.select`
  background: #53535329;
  width: 80%;
  height: 2rem;
  padding-left: 12px;
  transition: all 0.4s;
  color: #fff;
  & > option {
    color: #fff;
    background: #000;
  }
  &:focus {
    border-color: #ffffff80;
  }
`;
export default function Update() {
  const [categories, setCategories] = useState(null);
  const [article, setArticle] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const context = useContext(Context);
  useEffect(() => {
    const token = isLogged();
    if (token) {
      fetch(`${context.BACKEND}/app/category/all`, {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.data);
        })
        .catch((err) => console.error(err));
    } else {
      getToMainPage();
    }
  }, [, context]);
  useEffect(() => {
    const token = isLogged();
    if (token) {
      const articleUuid = location.search.replace("?article-uuid=", "");
      fetch(`${context.BACKEND}/app/article/${articleUuid}`, {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setArticle(data.data);
          setCategoryId(data.data.category_id)
          setDescription(data.data.description)
          setTitle(data.data.title)
          setEditorState(
            EditorState.createWithContent(
              ContentState.createFromBlockArray(convertFromHTML(data.data.text))
            )
          );
        })
        .catch((err) => console.error(err));
    } else {
      getToMainPage();
    }
  }, [, context]);

  function updateArticle(e) {
    e.preventDefault();
    const token = isLogged();
    if (token) {

      const articleUuid = location.search.replace("?article-uuid=", "");
      let data = {
        title: title,
        description: description,
        text: convertToHTML(editorState.getCurrentContent()),
        category_id: categoryId
      };
      console.log(data);
      fetch(`${context.BACKEND}/app/article/${articleUuid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(data),
      })
      .then(res => res.ok && goToAdmin())
      .catch((err) => console.error(err));
    } else {
        getToMainPage();
    }
  }
  return (
    <>
      <Head>
        <title>ProeniX - Admin</title>
      </Head>
      <ArticleHeader>Article Update</ArticleHeader>
      <Main>
        <Form onSubmit={updateArticle}>
          <FormTagsContainer>
            <Label htmlFor="title">Article Name: </Label>
            <Input onChange={e => setTitle(e.target.value)} defaultValue={title} type="text" name="title" />
          </FormTagsContainer>
          <FormTagsContainer>
            <Label htmlFor="description">Description</Label>
            <Textarea
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
              name="description"
              maxLength={100}
            ></Textarea>
          </FormTagsContainer>
          <FormTagsContainer>
            <Label htmlFor="category">Category Name: </Label>
            <Select defaultValue={categoryId} onChange={e => setCategoryId(e.target.value)} name="category">
              {categories &&
                categories.map((category, i) => (
                  <option key={i} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
          </FormTagsContainer>
          <FormTagsContainer>
            <Label>Text: </Label>
            <EditorContainer>
              <EditorWysiwyg
                onEditorStateChange={(value) => setEditorState(value)}
                editorState={editorState}
                wrapperStyle={{
                  padding: "1rem",
                }}
                editorStyle={{
                  minHeight: "10em",
                  border: "none",
                }}
                toolbarStyle={{
                  fontSize: "12px",
                  backgroundColor: "#53535329",
                }}
                toolbar={{
                  options: ["inline", "list", "textAlign"],
                  textAlign: {
                    className: "other",
                  },
                  list: {
                    className: "other",
                  },
                  inline: {
                    className: "icons",
                    options: ["bold", "italic", "underline"],
                    bold: { className: "icon" },
                    italic: { className: "icon" },
                    underline: { className: "icon" },
                  },
                }}
              />
            </EditorContainer>
          </FormTagsContainer>
          <ShareButtonContaineer>
            <ShareButton>Share!</ShareButton>
          </ShareButtonContaineer>
        </Form>
      </Main>
    </>
  );
}
