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
      flex: 1 0 30%;
      box-sizing: border-box;
      padding: 10px;
      margin-left: 10px;
      margin-top: 10px;
      height: 300px;
      width: 350px;
    }
  }

  @media (max-width: ${themeGet("devices.sizes.large")}px) {
    .projects-container {
      .project-item {
        flex: 1 0 48%;
      }
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    .line {
      &:after {
        width: 5vw;
      }
    }
    .projects-container {
      .project-item {
        flex: 1 0 100%;
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

  .btn-container {
    text-align: center;
    .btn-see-more {
      &:link,
      &:visited {
        color: ${themeGet("colors.yellow")};
        display: inline-block;
        text-decoration: none;
        border: 1px solid ${themeGet("colors.yellow")};
        transition: all 0.2s;
        text-align: center;
        padding: 10px 30px;
        border-radius: 4px;
      }

      &:hover {
        background-color: ${themeGet("colors.lightYellow")};
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        .learn {
          animation: moveToLeft ease-in-out;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
        }

        .arrow {
          animation: appearFromLeft ease-in-out;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
        }
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 1px rgba(0, 0, 0, 0.2);
      }
    }

    .learn {
      transform: translateX(5px);
    }

    .arrow,
    .learn {
      display: inline-block;
    }

    .arrow {
      opacity: 0;
      svg {
        width: 10px;
        height: 10px;
        fill: ${themeGet("colors.yellow")};
      }
    }
  }

  @keyframes appearFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(2px);
      opacity: 1;
    }
  }

  @keyframes moveToLeft {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`
