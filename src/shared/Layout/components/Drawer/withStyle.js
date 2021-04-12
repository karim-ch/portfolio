import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  background: ${themeGet("colors.lightNavy")};
  height: 100vh;
  width: 60vw;
  position: fixed;
  z-index: 4;
  right: 0;
  top: 0;
  animation: appear 0.5s;

  a {
    text-decoration: none;
  }

  .top {
    height: 70px;
    padding: 20px;

    button {
      float: right;
      background: transparent;
      border: none;

      svg {
        width: 20px;
        height: 20px;
        fill: ${themeGet("colors.white")};
        &:hover {
          fill: ${themeGet("colors.green")};
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
      margin: 30px;
      color: ${themeGet("colors.lightestSlate")};
      &:hover {
        color: ${themeGet("colors.green")};
      }
      font-size: 18px;
    }

    .resume-btn {
      border: 1px solid ${themeGet("colors.green")};
      color: ${themeGet("colors.green")};
      padding: 10px;
      border-radius: 4px;
      &:hover {
        background-color: #64ffda1c;
      }
    }
  }

  @keyframes appear {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translate(0);
    }
  }
`
