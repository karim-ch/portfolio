import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  min-height: 55vh;
  margin-top: 30vh;
  text-align: center;

  button {
    border: 1px solid ${themeGet("colors.green")};
    color: ${themeGet("colors.green")};
    background-color: transparent;
    padding: 20px 45px;
    border-radius: 4px;
    font-family: var(--font-mono);
    margin-top: 30px;
    &:hover {
      background-color: #64ffda1c;
    }
  }
`
