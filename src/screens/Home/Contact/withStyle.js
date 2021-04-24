import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  margin-bottom: 20vh;
  font-family: var(--font-sans);
  text-align: center;
  text-align: -webkit-center;

  .heading {
    font-size: var(--fz-xxl);
    &:after {
      display: none;
    }
    justify-content: center;
  }

  .contact {
    max-width: 620px;
    text-align: center;
    text-align: -webkit-center;

    .contact-btn {
      border: 1px solid ${themeGet("colors.yellow")};
      color: ${themeGet("colors.yellow")};
      background-color: transparent;
      padding: 13px;
      border-radius: 4px;
      font-family: var(--font-mono);
      margin-top: 30px;
      &:hover {
        background-color: ${themeGet("colors.lightYellow")};
      }
    }
  }
`
