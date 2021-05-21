import styled from "styled-components"

export default component => styled(component)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #1a1a1f;
  position: relative;

  .group {
    height: 190px;
    width: 100%;
    position: absolute;
    top: 190px;
    left: 0;

    &:nth-child(1) {
      animation: slide 2s infinite linear;
    }
    &:nth-child(2) {
      animation: slide 2s infinite linear;
      animation-delay: 1s;
    }

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      height: 35px;
      margin: 10px 0;
      padding: 0 4px;

      .tab {
        background: #232327;
        width: 20%;
        height: 100%;
        margin: 0 4px;
        border-radius: 5px;
      }

      .green {
        background: #3bdb83;
      }
    }
  }

  @keyframes slide {
    100% {
      top: -190px;
    }
  }
`
