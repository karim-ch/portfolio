import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  padding: 10vh 20% 0 20%;
  min-height: 70vh;

  .intro {
    font-size: 50px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-weight: 600;
    color: ${themeGet("colors.slate")};
  }

  .me {
    font-weight: 700;
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 20px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    color: ${themeGet("colors.slate")};
  }

  .role {
    font-weight: 700;
    font-size: 85px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    color: ${themeGet("colors.slate")};
    transition: all 0.4s;
    position: relative;

    &:hover {
      -webkit-text-stroke: 1px ${themeGet("colors.slate")};
      color: white;
      transform: skewX(-5deg);
    }
  }

  .container {
    display: flex;
    width: 100%;

    .right {
      height: 350px;
      width: 350px;
    }
  }

  @keyframes fromLeft {
    0% {
      opacity: 0.4;
      transform: translateX(-20%);
    }
    100% {
      opacity: 1;
      transform: translateX(3%) skewX(7deg);
    }
  }
`
