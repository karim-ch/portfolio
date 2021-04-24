import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  font-family: var(--font-sans);
  max-width: 900px;

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
    position: relative;

    &--active {
      color: ${themeGet("colors.yellow")};
      transition: all 1s;
      &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        border-bottom: 2px solid ${themeGet("colors.yellow")};
      }
    }
  }

  .rtl.styled-tab-button--active::after {
    animation: rtl 1s;
  }

  .ltr.styled-tab-button--active::after {
    animation: ltr 1s;
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
        color: ${themeGet("colors.yellow")};
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

  @keyframes ltr {
    0% {
      transform: translateX(-70px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes rtl {
    0% {
      transform: translateX(70px);
    }
    100% {
      transform: translate(0);
    }
  }
`
