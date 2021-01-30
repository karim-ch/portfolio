import { css } from "styled-components"

export default css`
  * {
    scrollbar-color: #009c4e #dedee2;
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background-color: #009c4e;
    border: 2px solid transparent;
    border-radius: 2px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #dedee2;
  }
`
