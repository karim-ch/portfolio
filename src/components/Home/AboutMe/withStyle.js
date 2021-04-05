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

    .pic {
      width: 27%;
      border-radius: 3px;
      height: fit-content;

      img {
        height: fit-content;
        object-fit: cover;
        max-height: 240px;
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
        color: ${themeGet("colors.green")};
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

      .pic {
        margin-top: 20px;
        width: 100%;
        object-fit: cover;
        border-radius: 3px;
        img {
          width: 100%;
        }
      }

      .text-container {
        width: 100%;
      }
    }
  }

  /* Outline Out */
  .hvr-outline-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
  }
  .hvr-outline-out:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: top, right, bottom, left;
    transition-property: top, right, bottom, left;
  }
  .hvr-outline-out:hover:before,
  .hvr-outline-out:focus:before,
  .hvr-outline-out:active:before {
    border: ${themeGet("colors.green")} solid 4px;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }
`
