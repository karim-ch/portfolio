import styled, { css } from "styled-components"

export default component => styled(component)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  perspective: 15em;
  perspective-origin: 50% calc(50% - 3.5em);
  position: relative;

  .scene {
    transform-style: preserve-3d;

    ${({ animation }) =>
      !animation
        ? css`
            animation: sceneRotate 10s linear infinite;
          `
        : css`
            animation: rotateChange 0.9s both;
          `}
  }

  @keyframes sceneRotate {
    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes rotateChange {
    0%,
    100% {
      transform: rotateY(30deg) translate(0);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotateY(-200deg) translateY(40rem);
      animation-timing-function: ease-out;
    }
  }
`
