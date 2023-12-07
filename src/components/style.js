import { css } from "styled-components"

export const primaryColor = '#1695DC'; 
export const marginTop = 64;

export const flex = (direction, align, justify) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`