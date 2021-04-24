import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  .drawer {
    background: ${themeGet("colors.darkNavy")};
    height: 100vh;
    width: 60vw;
    position: fixed;
    z-index: 4;
    right: 0;
    top: 0;
    animation: appear 0.5s ease-in-out;
    font-size: var(--fz-lg);

    &--closing {
      animation: disappear 0.49s ease-in-out;
    }

    .top {
      padding: 2rem;

      button {
        float: right;
        background: transparent;
        border: none;

        svg {
          width: 2rem;
          height: 2rem;
          fill: ${themeGet("colors.white")};
          &:hover {
            fill: ${themeGet("colors.yellow")};
          }
        }
      }
    }

    .drawer-sections {
      list-style: none;
      width: 100%;
      height: 100%;
      padding: 0;
      text-align: center;
      margin-top: 18vh;
      text-decoration: none;

      li {
        margin: 3rem;
        color: ${themeGet("colors.white")};
        &:hover {
          color: ${themeGet("colors.yellow")};
        }
      }

      .resume-btn {
        border: 1px solid ${themeGet("colors.yellow")};
        color: ${themeGet("colors.yellow")};
        border-radius: 0.4rem;
        padding: 1.2rem 3.3rem;
        transition: all 0.3s;

        &:hover {
          background-color: ${themeGet("colors.lightYellow")};
        }
      }
    }
  }

  @keyframes appear {
    0% {
      opacity: 0.5;
      transform: translateX(30rem);
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      transform: translateX(30rem);
    }
  }
`
