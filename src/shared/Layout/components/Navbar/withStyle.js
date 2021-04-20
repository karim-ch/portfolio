import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(2, 12, 27, 0.7) 0 10px 15px -10px;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${themeGet("colors.white")};
  font-family: var(--font-mono);
  position: sticky;
  background-color: ${themeGet("colors.navy")};
  top: 0;
  z-index: 2;

  .logo {
    padding: 0 30px;

    svg {
      width: 45px;
      height: 45px;
      fill: ${themeGet("colors.yellow")};
    }
  }

  .active {
    color: ${themeGet("colors.yellow")};
  }

  .sections {
    display: flex;
    align-items: center;

    > * {
      margin: 0 20px;
      color: ${themeGet("colors.white")};
      list-style: none;
      &:hover {
        color: ${themeGet("colors.yellow")};
      }
      text-decoration: none;
      font-size: 13px;
    }

    .resume-btn {
      border: 1px solid ${themeGet("colors.yellow")};
      color: ${themeGet("colors.yellow")};
      padding: 10px;
      border-radius: 4px;
      &:hover {
        background-color: #64ffda1c;
      }
    }

    .burger {
      background: none;
      border: none;
      svg {
        width: 28px;
        height: 28px;
        fill: ${themeGet("colors.white")};

        &:hover {
          fill: ${themeGet("colors.yellow")};
        }
      }
    }
  }
`
