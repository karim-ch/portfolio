import styled from "styled-components"

export default component => styled(component)`
  .floor {
    position: absolute;
    top: 1em;
    transform: translate(-50%, -50%) rotateX(90deg);
    width: 5em;
    height: 5em;
    background-image: radial-gradient(rgba(141, 141, 141, 0), #737373 75%),
      repeating-conic-gradient(
        from 45deg,
        #757575 0deg 90deg,
        #b1b1b1 90deg 180deg
      );
    background-size: 100%, 1em 1em;
    border-radius: 50%;
    opacity: 0.2;
  }
`
