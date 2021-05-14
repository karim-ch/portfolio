import styled, { css } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  display: flex;
  flex-direction: row;
  height: 7rem;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${themeGet("colors.navy")};
  box-shadow: 0 4px 20px rgb(0 0 0 / 5%);

  .logo {
    padding: 0 3rem;
    svg {
      width: 4.5rem;
      height: 4.5rem;
      fill: ${themeGet("colors.yellow")};
      transition: all 0.5s;
    }
  }

  .active {
    color: ${themeGet("colors.yellow")};
  }

  .sections {
    display: flex;
    align-items: center;

    > * {
      margin: 0 2rem;
      list-style: none;
      transition: all 0.3s;
      font-weight: 600;

      &:hover {
        color: ${themeGet("colors.yellow")};
      }

      animation: appearFromTop 0.3s;
      animation-fill-mode: both;

      ${() =>
        Array.from({ length: 8 }).map(
          (_, i) => css`
            &:nth-child(${i}) {
              animation-delay: ${i / 10}s;
            }
          `
        )}
    }
  }      
    

    .resume-btn {
      border: 1px solid ${themeGet("colors.yellow")};
      color: ${themeGet("colors.yellow")};
      padding: 1rem;
      border-radius: 0.4rem;
      &:hover {
        background-color: ${themeGet("colors.lightYellow")};
      }
    }

    .burger {
      background: none;
      border: none;

      svg {
        width: 2.8rem;
        height: 2.8rem;
        fill: ${themeGet("colors.white")};
        transition: all 0.3s;

        &:hover {
          fill: ${themeGet("colors.yellow")};
        }
      }
    }
  }

  @keyframes appearFromTop {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`
