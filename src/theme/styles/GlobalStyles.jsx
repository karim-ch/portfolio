import { memo } from "react"
import { createGlobalStyle } from "styled-components"
import themeGet from "@styled-system/theme-get"
import Fonts from "./fonts"
import reset from "./reset"
import scrollbar from "./scrollbar"

const globalStyles = createGlobalStyle`
  ${reset}
  ${scrollbar}
  ${Fonts};

  :root {
    position: relative;
    background-color: ${themeGet("colors.navy")};
    
    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  button {
    outline: none;
  }
  
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color:  ${themeGet("colors.slate")};
    font-family: var(--font-sans); 
    font-size: var(--fz-md);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }
  
  section {
    .heading {
      display: flex;
      align-items: center;
      position: relative;
      margin: 10px 0 40px;
      width: fit-content;
      font-size: clamp(26px, 5vw, var(--fz-heading));
      white-space: nowrap;
      color: ${themeGet("colors.white")};

    }
     p {
      margin: 0 0 15px 0;
      &:last-child,
      &:last-of-type {
        margin: 0;
      }
    }
    
    a {
      text-decoration: none;
      color: ${themeGet("colors.yellow")};
      &:hover {
        text-decoration: underline;
      }
    }
  }

`

export default memo(globalStyles)
