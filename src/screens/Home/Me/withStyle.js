import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  padding: 10vh 20% 0 20%;
  min-height: 70vh;

  .me {
    font-size: 50px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-weight: 500;

    span {
      font-size: 58px;
      font-weight: bold;
    }
  }

  .role {
    font-weight: 700;
    font-size: 85px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    color: ${themeGet("colors.slate")};
  }

  .build {
    font-weight: 700;
    font-size: 85px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    color: ${themeGet("colors.slate")};
  }

  .container {
    display: flex;
    width: 100%;

    .right {
      background: #f8f8f8;
      border-radius: 50%;
      height: 550px;
      width: 550px;
    }
  }
`
