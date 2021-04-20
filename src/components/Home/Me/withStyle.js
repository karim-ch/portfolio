import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 22vh;
  min-height: 50vh;
  max-width: 900px;

  .welcome {
    color: ${themeGet("colors.yellow")};
    font-family: var(--font-mono);
  }

  .name {
    color: ${themeGet("colors.white")};
    font-family: var(--font-mono);
    font-size: 80px;
    &:after {
      content: ".";
      color: ${themeGet("colors.yellow")};
      border-radius: 30px;
    }
  }

  .description {
    color: ${themeGet("colors.slate")};
    font-family: var(--font-mono);
    font-size: 40px;
  }

  p {
    margin-top: 40px !important;
    max-width: 500px;
  }

  button {
    border: 1px solid ${themeGet("colors.yellow")};
    color: ${themeGet("colors.yellow")};
    background-color: transparent;
    padding: 20px 45px;
    border-radius: 4px;
    font-family: var(--font-mono);
    margin-top: 30px;
    transition: all 0.2s;

    &:hover {
      background-color: #64ffda1c;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
    &:active {
      transform: translate(0);
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.4);
    }
  }
`
