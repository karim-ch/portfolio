import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 10vh;

  .welcome {
    color: ${themeGet("colors.yellow")};
    font-family: var(--font-mono);
  }

  .name {
    color: ${themeGet("colors.white")};
    font-family: var(--font-sans);
    font-size: var(--fz-name);
    letter-spacing: 1.5px;

    &:after {
      content: ".";
      color: ${themeGet("colors.yellow")};
    }
  }

  .description {
    color: ${themeGet("colors.slate")};
    font-family: var(--font-mono);
    font-size: var(--fz-description);
  }

  p {
    margin-top: 4rem !important;
    max-width: 35vw;
  }

  button {
    border: 1px solid ${themeGet("colors.yellow")};
    color: ${themeGet("colors.yellow")};
    background-color: transparent;
    padding: 2rem 4.2rem;
    border-radius: 0.4rem;
    font-family: var(--font-mono);
    margin-top: 3rem;
    transition: all 0.2s;

    &:hover {
      background-color: ${themeGet("colors.lightYellow")};
      transform: translateY(-1px);
      box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.4);
    }
    &:active {
      transform: translate(0);
      box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    p {
      max-width: 100%;
    }
  }
`
