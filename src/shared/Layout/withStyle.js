import styled from "styled-components"

export default component => styled(component)`
  position: relative;

  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    height: 100%;
    backdrop-filter: blur(5px);
  }
`
