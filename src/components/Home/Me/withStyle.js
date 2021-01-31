import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 22vh;
  min-height: 50vh;
  max-width: 900px;

  .welcome {
    color: ${themeGet("colors.green")};
    font-family: var(--font-mono);
  }

  .name {
    color: ${themeGet("colors.lightestSlate")};
    font-family: var(--font-mono);
    font-size: 80px;
    &:after {
      content: ".";
      color: ${themeGet("colors.green")};
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
    border: 1px solid ${themeGet("colors.green")};
    color: ${themeGet("colors.green")};
    background-color: transparent;
    padding: 20px 45px;
    border-radius: 4px;
    font-family: var(--font-mono);
    margin-top: 30px;
    &:hover {
      background-color: #64ffda1c;
    }
  }
`
