import styled, { css } from "styled-components"

export default component => styled(component)`
  .screen {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1a1a1f;
    transform: rotateX(-12deg) translateZ(calc(-1em)) translateY(13px);
    border: solid 3px white;
  }

  .screenBack {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateX(-12deg) translateZ(calc(-1em - 2px)) translateY(13px);
    background: white;
    box-shadow: 0 0 0.8em #d2d2d2 inset;
  }
`
