import styled from "styled-components";

import { flex, primaryColor } from "./../../components/style";

const SError404 = styled.section`
  height: 100vh;

  ${flex("column", "center", "center")}
  img {
    width: 600rem;
  }

  .link {
    border-radius: 8rem;
    padding: 10rem 20rem;
    cursor: pointer;
    background-color: #000;
    border: 1rem solid ${primaryColor};
    color: #fff;
    font-size: 18rem;
    transition: all 300ms ease-in-out;

    &:hover {
      background: ${primaryColor};
    }
  }
`;

export default SError404;
