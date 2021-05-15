import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  .drawer {
    background: ${themeGet("colors.darkNavy")};
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 9;
    right: 0;
    top: 0;
    animation: appear 0.5s ease-in-out;
    animation-fill-mode: both;
    font-size: var(--fz-lg);
    text-align: -webkit-center;

    &--closing {
      animation: disappear 0.49s ease-in-out;
    }

    .drawer-sections {
      list-style: none;
      padding: 0;
      text-align: center;
      margin-top: 12vh;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      width: fit-content;

      .menu {
        color: ${themeGet("colors.lightGrey")};
        letter-spacing: 1px;
        font-size: var(--fz-sm);
      }

      .li {
        margin: 1rem;
        font-size: var(--fz-drawer-item);
        font-weight: bold;
        color: ${themeGet("colors.lightGrey")};
        transition: all 0.3s;
        position: relative;
        display: inline;

        &--active {
          color: ${themeGet("colors.navy")};
          &:before {
            content: "";
            width: 10rem;
            height: 1rem;
            position: absolute;
            top: 50%;
            transform: translateX(-120%);
            background-color: white;
            animation: none !important;
          }
        }

        &:hover {
          color: ${themeGet("colors.navy")};

          &:before {
            content: "";
            width: 10rem;
            height: 1rem;
            position: absolute;
            top: 50%;
            transform: translateX(-120%);
            background-color: white;
            animation: left 1s;
          }
        }
      }
    }
  }

  @keyframes appear {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes disappear {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  @keyframes left {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(-120%);
    }
  }

  @keyframes right {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(0);
    }
  }
`
