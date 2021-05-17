import styled, { css } from "styled-components"

export default component => styled(component)`
  .laptop {
    width: 3em;
    height: 2.6em;
    transform-style: preserve-3d;
    position: absolute;
    bottom: -4em;
    left: -1em;

    animation-fill-mode: both;

    ${({ animation }) => {
      return (
        animation !== "empty" &&
        css`
          animation: enterFromBottom 0.4s linear;
        `
      )
    }};

    @keyframes enterFromBottom {
      0% {
        bottom: -6em;
      }

      100% {
        bottom: -4em;
      }
    }
  }
`
