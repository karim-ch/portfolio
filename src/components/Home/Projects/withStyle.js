import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  font-family: var(--font-sans);

  .line {
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

  .sm {
    font-size: 25px;
  }

  .projects-container {
    .projects {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .project-item {
      flex: 1 0 calc(30% - 10px);
      box-sizing: border-box;
      padding: 10px;
      margin-left: 10px;
      margin-top: 10px;
      height: 300px;
      min-width: 350px;
    }
  }

  @media (max-width: ${themeGet("devices.sizes.large")}px) {
    .projects-container {
      .project-item {
        flex: 1 0 calc(49% - 10px);
      }
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    .projects-container {
      .project-item {
        flex: 100%;
      }
    }
  }

  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`
