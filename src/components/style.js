import { css } from "styled-components"




export const flex = (direction, align, justify) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`