import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  padding: 10vh 20% 0 20%;
  min-height: 70vh;

  .hey {
    font-size: 50px;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-weight: 600;
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

      &:before {
        content: "";
        width: 45rem;
        height: 1.6rem;
        position: absolute;
        bottom: 20px;
        transform: translateX(-100%);
        background-color: ${themeGet("colors.slate")};
        animation: fromLeft 1s;
        animation-fill-mode: both;
        z-index: -1;
      }
    }

    &--unique {
      &:hover {
        &:before {
          width: 40rem;
        }
      }
    }

    &--experiences {
      &:hover {
        &:before {
          width: 61rem;
        }
      }
    }
  }

  .build {
    font-weight: 700;
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 20px;
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
      clip-path: circle(50%);
    }
  }

  @keyframes fromLeft {
    0% {
      opacity: 0.4;
      transform: translateX(-20%);
    }
    100% {
      opacity: 1;
      transform: translateX(0) skewX(9deg);
    }
  }
`
