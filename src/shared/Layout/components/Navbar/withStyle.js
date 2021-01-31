import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 15px -10px;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--lightest-slate);
  font-family: var(--font-mono);

  .sections {
    display: flex;
    align-items: center;

    > * {
      margin: 0 20px;
      color: ${themeGet("colors.lightestSlate")};
      list-style: none;
      &:hover {
        color: ${themeGet("colors.green")};
      }
      text-decoration: none;
    }

    .resume-btn {
      border: 1px solid ${themeGet("colors.green")};
      color: 1px solid ${themeGet("colors.green")};
      padding: 10px;
      border-radius: 4px;
      &:hover {
        background-color: #64ffda1c;
      }
    }
  }
`
