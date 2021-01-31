import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  font-family: var(--font-sans);

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

  .styled-tab-list {
    width: max-content;
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    padding: 0;
  }

  .styled-tab-button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0 20px 2px;
    border: none;
    border-bottom: 2px solid ${themeGet("colors.lightestNavy")};
    background-color: transparent;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-align: left;
    white-space: nowrap;
    color: ${themeGet("colors.slate")};
  }

  .active {
    color: ${themeGet("colors.green")};
    border-bottom: 2px solid ${themeGet("colors.green")};
  }

  .styled-tab-content {
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-left: 30px;

    h3 {
      margin-bottom: 5px;
      font-size: var(--fz-xxl);
      font-weight: 500;

      .company {
        color: ${themeGet("colors.green")};
      }
    }

    .range {
      margin-bottom: 30px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    .job-description {
      max-width: 500px;
    }
  }
`
