import styled from "styled-components"

export default component => styled(component)`
  .screen,
  .screenBack {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .screen {
    background-color: #1a1a1f;
    transform: rotateX(-12deg) translateZ(calc(-1em)) translateY(13px);
    border: solid 3px #000000;
  }
  .screenBack {
    transform: rotateX(-12deg) translateZ(calc(-1em - 2px)) translateY(13px);
    background: white;
    box-shadow: 0 0 0.8em #d2d2d2 inset;
  }
`
