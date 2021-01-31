import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  font-family: var(--font-sans);
  min-height: 800px;

  .heading {
    &:after {
      content: "";
      display: block;
      position: relative;
      top: 5px;
      width: 30vw;
      height: 1px;
      margin-left: 20px;
      background-color: ${themeGet("colors.lightestNavy")};
    }
  }
`
