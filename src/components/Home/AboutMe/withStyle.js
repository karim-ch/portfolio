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
      width: 300px;
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
      object-fit: cover;
      border-radius: 3px;
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
`
