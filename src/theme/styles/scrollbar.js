import { css } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default css`
  * {
    scrollbar-color: ${themeGet("colors.lightNavy")};
    ${themeGet("colors.lightestNavy")};
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${themeGet("colors.lightestNavy")};
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${themeGet("colors.darkNavy")};
    border: 2px solid transparent;
    border-radius: 2px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${themeGet("colors.lightestNavy")};
  }
`
