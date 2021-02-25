import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ odd }) => (odd ? "row" : "row-reverse")};
  text-align: ${({ odd }) => (odd ? "left" : "right")};

  .text-container {
    width: 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: ${({ odd }) => (!odd ? "flex-end" : "flex-start")};

    .type {
      color: ${themeGet("colors.green")};
    }

    .title {
      color: ${themeGet("colors.lightestSlate")};
    }

    > p {
      background-color: ${themeGet("colors.darkBlue")};
      padding: 20px;
      width: 120%;
      z-index: 1;
      margin: 15px 0;
    }
  }

  .image-container {
    width: 55%;
    border: solid 1px;
  }
`
