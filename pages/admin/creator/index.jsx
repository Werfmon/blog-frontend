import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { convertToHTML } from "draft-convert";
import styled from "styled-components";
const Editor = dynamic(
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
`;
const ShareButtonContaineer = styled.div`
  width: calc(80% + 8rem);
  margin: 0 auto;
  display: flex;
  justify-content: end;
`;
export default function creator() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <>
      <ArticleHeader>Article Creator</ArticleHeader>
      <Main>
        <Form>
          <FormTagsContainer>
            <Label>Article Name: </Label>
            <Input type="text" />
          </FormTagsContainer>
          <FormTagsContainer>
            <Label>Description</Label>
            <Textarea maxLength={100}></Textarea>
          </FormTagsContainer>
          <FormTagsContainer>
            <Label>Text: </Label>
            <EditorContainer>
              <Editor
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
                  options: [
                    "inline",
                    "list",
                    "textAlign",
                  ],
                  textAlign: {
                    className: 'other'
                  },
                  list: {
                    className: 'other'
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
