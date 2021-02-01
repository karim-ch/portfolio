import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  width: 100%;
  height: 100%;
  background-color: ${themeGet("colors.darkBlue")};

  box-shadow: 0 10px 30px -15px ${themeGet("colors.navyShadow")};
  display: flex;
  flex-direction: column;

  .project-title {
    height: 20%;
    padding: 4% 10%;
    display: flex;
    justify-content: space-between;

    svg {
      width: 30px;
      &:hover {
        color: ${themeGet("colors.green")};
      }
    }

    .green {
      color: ${themeGet("colors.green")};
    }
  }
  .project-body {
    height: 60%;
    padding: 5% 10%;
  }
  .project-footer {
    display: flex;
    overflow: hidden;
    list-style: none;
    justify-content: space-between;
    padding: 0 20px;

    li {
      position: relative;
      padding-left: 15px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${themeGet("colors.green")};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  h3 {
    color: ${themeGet("colors.lightestSlate")};
    padding-bottom: 7px;
  }
`
