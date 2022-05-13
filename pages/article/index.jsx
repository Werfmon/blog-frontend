import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ArticleSection from "../../Components/ArticleSection";
import BackButton from "../../Components/BackButton";
import { getToMainPage } from "../../utils/getToMainPage";
import { Context } from "../index";

const Main = styled.main`
  color: #fff;
  min-height: 100vh;
  z-index: 0;
  position: relative;
`;
const CategoryHeader = styled.div`
  width: 100%;
  padding-block: 1rem;
  padding-left: 1rem;
  margin-bottom: 4rem;
  & > h1 {
    font-size: 1.7rem;
    z-index: 2000;
    color: #fff;
    position: relative;
  }
`;
const Footer = styled.footer`
  width: 100%;
  background-color: #000;
  & > div {
    height: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 55%;
    align-items: center;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > svg {
    margin-inline: 10px;
    cursor: pointer;
  }

`;
const ShareIcon = styled.button`
  position: relative;
  background-color: unset;
  &:focus-within::after {
    opacity: 1;

  }
  &:hover{
    cursor: pointer;
  }
  &::after {
    content: "Copied";
    position: absolute;
    height: fit-content;
    width: fit-content;
    padding: 7px 9px;
    background-color: #131313;
    border-radius: 8px 8px 8px 0;
    color: #fff;
    top: -2.2rem;
    opacity: 0;
    left: 50%;
    z-index: 10;
  }
`;
export default function article() {
  const [article, setArticle] = useState(null);
  const context = useContext(Context);

  useEffect(() => {
    const articleUuid = window.location.search.replace("?uuid=", "");
    fetch(`${context.BACKEND}/api/article?uuid=${articleUuid}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  function copyLink() {
    navigator.clipboard.writeText(location.href);
  }
  //TODO: like, save
  return (
    <>
      <Main>
        <svg
          id="visual"
          viewBox="0 0 1200 500"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{ position: "absolute", top: 0, zIndex: -1 }}
        >
          <rect x="0" y="0" width="1200" height="500" fill="#000000"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#3c6dfa"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#3c6dfa" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_1" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#3c6dfa"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#0055dd" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_2" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#003ec0"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#0055dd" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_3" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#003ec0"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#0029a4" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_4" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#001788"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#0029a4" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_5" x1="58.3%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#001788"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#000000" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_0" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#3c6dfa"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#3c6dfa" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_1" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#0055dd"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#3c6dfa" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_2" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#0055dd"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#003ec0" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_3" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#0029a4"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#003ec0" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_4" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#0029a4"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#001788" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_5" x1="0%" y1="100%" x2="41.7%" y2="0%">
              <stop
                offset="2.0000000000000036%"
                stopColor="#000000"
                stopOpacity="1"
              ></stop>
              <stop offset="98%" stopColor="#001788" stopOpacity="1"></stop>
            </linearGradient>
          </defs>

          <g transform="translate(0, 0)">
            <path
              d="M500 0C495.3 42.2 490.6 84.5 483 129.4C475.3 174.3 464.7 222 428.7 247.5C392.7 273 331.2 276.5 290.6 290.6C250 304.7 230.4 329.4 206 356.8C181.6 384.2 152.6 414.2 117.5 438.5C82.4 462.8 41.2 481.4 0 500L0 0Z"
              fill="#000f7b"
            ></path>
            <path
              d="M416.7 0C412.8 35.2 408.8 70.4 402.5 107.8C396.1 145.3 387.3 185 357.2 206.2C327.2 227.5 276 230.4 242.2 242.2C208.4 253.9 192 274.5 171.7 297.3C151.4 320.1 127.2 345.2 97.9 365.4C68.7 385.7 34.3 401.2 0 416.7L0 0Z"
              fill="#002096"
            ></path>
            <path
              d="M333.3 0C330.2 28.2 327.1 56.3 322 86.3C316.9 116.2 309.8 148 285.8 165C261.8 182 220.8 184.4 193.7 193.7C166.7 203.1 153.6 219.6 137.3 237.9C121.1 256.1 101.7 276.1 78.3 292.4C54.9 308.6 27.5 320.9 0 333.3L0 0Z"
              fill="#0034b2"
            ></path>
            <path
              d="M250 0C247.7 21.1 245.3 42.2 241.5 64.7C237.7 87.2 232.4 111 214.3 123.7C196.3 136.5 165.6 138.3 145.3 145.3C125 152.4 115.2 164.7 103 178.4C90.8 192.1 76.3 207.1 58.8 219.3C41.2 231.4 20.6 240.7 0 250L0 0Z"
              fill="#0049ce"
            ></path>
            <path
              d="M166.7 0C165.1 14.1 163.5 28.2 161 43.1C158.4 58.1 154.9 74 142.9 82.5C130.9 91 110.4 92.2 96.9 96.9C83.3 101.6 76.8 109.8 68.7 118.9C60.5 128.1 50.9 138.1 39.2 146.2C27.5 154.3 13.7 160.5 0 166.7L0 0Z"
              fill="#2061eb"
            ></path>
            <path
              d="M83.3 0C82.6 7 81.8 14.1 80.5 21.6C79.2 29.1 77.5 37 71.4 41.2C65.4 45.5 55.2 46.1 48.4 48.4C41.7 50.8 38.4 54.9 34.3 59.5C30.3 64 25.4 69 19.6 73.1C13.7 77.1 6.9 80.2 0 83.3L0 0Z"
              fill="#3c6dfa"
            ></path>
          </g>
        </svg>
        {article && (
          <>
            <CategoryHeader>
              <h1>{article.category_name}</h1>
            </CategoryHeader>
            <ArticleSection articleData={article} />
          </>
        )}
      </Main>
      <Footer>
        <div>
          <BackButton action={getToMainPage} />
          <IconContainer>
            <svg
              width="23"
              height="23"
              viewBox="0 0 33 30"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.3196 3.23697C32.3196 1.48344 30.5795 0.0437856 28.4296 0.00527537V0H4.49919C2.32206 0 0.550781 1.4407 0.550781 3.2127V30L12.8693 23.3182L25.1878 30V13.1884H32.3196V3.23697ZM23.8912 28.0291L12.8693 22.05L1.84747 28.0291V3.2127C1.84747 2.02311 3.03718 1.05507 4.49919 1.05507H25.2566C24.6192 1.56257 24.166 2.22199 23.9826 2.96001L23.9819 2.9616C23.9527 3.07871 23.9301 3.19793 23.9151 3.31874C23.8996 3.44165 23.8912 3.56668 23.8912 3.69276V13.1884V28.0291ZM31.0229 12.1334H25.1878V3.69276C25.1878 3.5134 25.2105 3.33878 25.2527 3.16945C25.5036 2.1724 26.4573 1.37635 27.6697 1.13579C27.693 1.13104 27.7138 1.1226 27.7371 1.11891C27.8947 1.09042 28.06 1.0804 28.2253 1.07196C28.2791 1.06932 28.3304 1.0593 28.3848 1.05877C29.841 1.07829 31.0229 2.05107 31.0229 3.23697V12.1334Z"
                fill="#fff"
              />
            </svg>
            <ShareIcon onClick={copyLink}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 30 30"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9131 18.7331C21.9249 18.7331 20.1739 19.7685 19.1711 21.3284L11.28 17.1823C11.5633 16.5108 11.72 15.7734 11.72 15.0001C11.72 14.2268 11.5633 13.4894 11.28 12.8179L19.1711 8.67174C20.174 10.2316 21.9249 11.267 23.9131 11.267C27.0194 11.267 29.5466 8.73987 29.5466 5.63361C29.5466 2.52716 27.0194 0 23.9131 0C20.8069 0 18.2797 2.52716 18.2797 5.63348C18.2797 6.40684 18.4364 7.14419 18.7196 7.81568L10.8286 11.9618C9.8257 10.4019 8.0748 9.36652 6.08654 9.36652C2.98029 9.36652 0.453125 11.8937 0.453125 15C0.453125 18.1063 2.98029 20.6335 6.08654 20.6335C8.0748 20.6335 9.82577 19.5981 10.8286 18.0382L18.7196 22.1843C18.4364 22.8558 18.2797 23.5932 18.2797 24.3665C18.2797 27.4728 20.8069 30 23.9131 30C27.0194 30 29.5466 27.4728 29.5466 24.3665C29.5466 21.2603 27.0194 18.7331 23.9131 18.7331ZM23.9131 0.967742C26.4858 0.967742 28.5789 3.06077 28.5789 5.63348C28.5789 8.20613 26.4858 10.2992 23.9131 10.2992C21.3404 10.2992 19.2474 8.20613 19.2474 5.63348C19.2474 3.06077 21.3404 0.967742 23.9131 0.967742ZM6.08648 19.6657C3.51383 19.6657 1.4208 17.5727 1.4208 15C1.4208 12.4273 3.51383 10.3343 6.08648 10.3343C8.65912 10.3343 10.7522 12.4273 10.7522 15C10.7522 17.5727 8.65912 19.6657 6.08648 19.6657ZM23.9131 29.0323C21.3404 29.0323 19.2474 26.9392 19.2474 24.3665C19.2474 21.7939 21.3404 19.7008 23.9131 19.7008C26.4858 19.7008 28.5789 21.7939 28.5789 24.3665C28.5789 26.9392 26.4858 29.0323 23.9131 29.0323Z"
                  fill="#fff"
                />
              </svg>
            </ShareIcon>
            <svg
              width="23"
              height="23"
              viewBox="0 0 30 28"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5768 3.26133C26.0059 1.69042 23.9262 0.831824 21.7066 0.831824C19.487 0.831824 17.4009 1.69678 15.83 3.26769L15.0095 4.08812L14.1764 3.25497C12.6055 1.68406 10.5131 0.812744 8.29342 0.812744C6.08016 0.812744 3.99409 1.6777 2.42954 3.24225C0.858629 4.81316 -0.00632514 6.89923 3.48253e-05 9.11885C3.48253e-05 11.3385 0.871349 13.4182 2.44226 14.9891L14.3863 26.9331C14.5516 27.0985 14.7742 27.1875 14.9905 27.1875C15.2067 27.1875 15.4293 27.1048 15.5947 26.9395L27.5641 15.0145C29.135 13.4436 30 11.3576 30 9.13793C30.0063 6.91831 29.1477 4.83224 27.5768 3.26133ZM26.3557 13.7998L14.9905 25.1205L3.65065 13.7807C2.4041 12.5342 1.71722 10.8806 1.71722 9.11885C1.71722 7.35714 2.39774 5.70355 3.64429 4.46336C4.88448 3.22317 6.53807 2.53629 8.29342 2.53629C10.0551 2.53629 11.7151 3.22317 12.9616 4.46972L14.399 5.90707C14.7361 6.24415 15.2767 6.24415 15.6137 5.90707L17.0384 4.48244C18.2849 3.23589 19.9449 2.54901 21.7002 2.54901C23.4556 2.54901 25.1092 3.23589 26.3557 4.47608C27.6023 5.72263 28.2828 7.37622 28.2828 9.13793C28.2891 10.8996 27.6023 12.5532 26.3557 13.7998Z"
                fill="#fff"
              />
            </svg>
          </IconContainer>
        </div>
      </Footer>
    </>
  );
}
