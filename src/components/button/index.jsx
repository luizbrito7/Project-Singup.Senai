import styled from "styled-components";

export default function Button({
  txt,
  bg,
  border,
  color,
  hover,
  colorHover,
  click,
}) {
  const SButton = styled.button`
    border-radius: 8rem;
    padding: 10rem 20rem;
    cursor: pointer;
    background: ${bg};
    border: 1rem solid ${border};
    color: ${color};
    font-size: 18rem;
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: ${hover};
      color: ${colorHover};
    }
  `;

  return <SButton onClick={click}>{txt}</SButton>;
}
