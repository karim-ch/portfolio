import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  font-family: var(--font-sans);
  max-width: 900px;

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

  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .wrapper {
      display: block;
      position: relative;
      max-height: 280px;
      width: 30%;
      border-radius: 8px;

      &:hover {
        background: transparent;
        outline: 0;

        &:after {
          top: 10px;
          left: 10px;
        }

        .img {
          filter: none;
          mix-blend-mode: normal;
        }
      }

      .img {
        position: relative;
        border-radius: 7px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        height: 100%;
        width: 100%;
        transition: all 0.2s;
      }

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: all 0.2s;
      }

      &:before {
        top: 0;
        left: 0;
        background-color: ${themeGet("colors.yellow")};
      }

      &:after {
        border: 2px solid ${themeGet("colors.yellow")};
        top: 12px;
        left: 12px;
        z-index: -1;
      }
    }

    .text-container {
      width: 60%;
    }
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▰";
        position: absolute;
        left: 0;
        color: ${themeGet("colors.yellow")};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    max-width: unset;

    .about {
      display: flex;
      flex-direction: column;
      width: 100%;

      .wrapper {
        margin-top: 20px;
        align-self: center;
      }

      .text-container {
        width: 100%;
      }
    }
  }

  // /* Outline Out */
  // .hvr-outline-out {
  //   display: inline-block;
  //   vertical-align: middle;
  //   -webkit-transform: perspective(1px) translateZ(0);
  //   transform: perspective(1px) translateZ(0);
  //   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  //   position: relative;
  // }
  // .hvr-outline-out:before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   -webkit-transition-duration: 0.3s;
  //   transition-duration: 0.3s;
  //   -webkit-transition-property: top, right, bottom, left;
  //   transition-property: top, right, bottom, left;
  // }
  // .hvr-outline-out:hover:before,
  // .hvr-outline-out:focus:before,
  // .hvr-outline-out:active:before {
  //   border: ${themeGet("colors.yellow")} solid 4px;
  //   top: -8px;
  //   right: -8px;
  //   bottom: -8px;
  //   left: -8px;
  // }
`
