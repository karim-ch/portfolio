import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  position: fixed;
  bottom: 0;
  right: 3%;
  display: inline-flex;
  flex-direction: column;

  &:after {
    content: "";
    height: 15vh;
    width: 1px;
    border-left: solid 1px ${themeGet("colors.white")};
    align-self: center;
  }

  h6 {
    writing-mode: vertical-rl;
    color: ${themeGet("colors.white")};
    font-size: var(--fz-xs);
    letter-spacing: 1.3px;
    font-weight: 400;
    margin-bottom: 20px;
    transition: all 0.4s;

    &:hover {
      transform: translateY(-7px);
      color: ${themeGet("colors.yellow")};
    }
  }
`
