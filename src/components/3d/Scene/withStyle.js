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

    ${({ isRotating }) => {
      return (
        isRotating &&
        css`
          animation: sceneRotate 10s linear infinite;
        `
      )
    }}

    animation-fill-mode: both;

    @keyframes sceneRotate {
      to {
        transform: rotateY(360deg);
      }
    }

    @keyframes enter {
      from {
        transform: rotateY(-150deg);
      }
      to {
        transform: rotateY(30deg);
      }
    }
  }
`
