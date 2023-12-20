import styled from "styled-components";

import { flex, primaryColor } from "../style";

const SFooter = styled.footer`
  margin-top: 128rem;
  padding: 12rem 70rem;
  ${flex("column", "center", "center")};
  gap: 12rem;

  div {
    ${flex("row", "center", "space-between")};
    flex-wrap: wrap;
    width: 100%;
    gap: 32rem;

    span {
      font-size: 32rem;
      transition: 0.2s ease-in-out;
      height: 60rem;
      font-weight: bold;

      a {
        color: #000;
        height: 60rem;
        ${flex("column", "center", "center")}
        padding: 10rem;
      }
    }

    ul {
      ${flex("row", "center", "center")};
      gap: 12rem;
      list-style: none;
      flex-wrap: wrap;

      li {
        a {
          font-size: 16rem;
          color: #000;
          ${flex("column", "center", "center")};

          &::after {
            content: "";
            display: block;
            background-color: ${primaryColor};
            width: 0;
            height: 2rem;
            left: 5rem;
            margin-top: 3rem;
            transition: all 300ms ease-in-out;
          }

          &:hover::after {
            width: 35rem;
          }
        }
      }
    }

    nav {
      ${flex("row", "center", "center")};
      gap: 8rem;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  p {
    font-size: 12rem;
    text-align: left;
    padding: 12rem 0;
    border-top: 1px solid #d9d9d9;
    width: 100%;
  }

  @media (max-width: 850px) {
    div {
      ${flex("column", "center", "center")};
    }

    p {
      text-align: center;
    }
  }
`;

export default SFooter;
