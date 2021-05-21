import styled from "styled-components"

export default component => styled(component)`
  .bottomFace {
    position: absolute;
    width: 3em;
    height: 2.6em;
    bottom: 0;
    background: rgba(250, 250, 250, 0.9);
    transform: translateY(50%) rotateX(90deg) translateZ(6px);
    transform-style: preserve-3d;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border: inherit;
      background: #d7d7d7;
    }

    &:before {
      left: calc(3em - 5px);
      bottom: 0;
      transform-origin: right;
      transform: rotateY(-90deg);
    }

    &:after {
      left: 0;
      bottom: calc(2.6em - 5px);
      transform-origin: top;
      transform: rotateX(-90deg);
    }
  }

  .topFace {
    position: absolute;
    width: 3em;
    height: 2.6em;
    bottom: 0;
    background: rgba(250, 250, 250, 0.9);
    transform: translateY(50%) rotateX(90deg) translateZ(6px);
    box-shadow: 0 0 0.3em #7c7c7c;
    text-align: -webkit-center;
    transform-style: preserve-3d;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background: #d7d7d7;
      border: inherit;
      bottom: 0;
      left: 0;
    }

    &:before {
      top: 0;
      right: calc(3em - 5px);
      transform-origin: left;
      transform: rotateY(90deg);
    }

    &:after {
      top: calc(2.6em - 5px);
      right: 0;
      transform-origin: bottom;
      transform: rotateX(90deg);
    }

    .keysRow {
      width: 100%;
      margin-top: 2%;
      padding: 0 2%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .key {
        background-color: #bcbcbc;
        margin: 1px;
        width: 7%;
        height: 8px;
      }

      &:nth-child(1) {
        margin-top: 10%;
        .key {
          margin: 2px;
          width: 10%;
          height: 5px;
        }
      }

      &:nth-child(2) {
        .key {
          &:last-child {
            width: 15%;
          }
        }
      }

      &:nth-child(3) {
        .key {
          &:first-child {
            width: 15%;
          }
        }
      }

      &:nth-child(4) {
        .key {
          &:first-child {
            width: 11%;
          }

          &:last-child {
            width: 14%;
          }
        }
      }

      &:nth-child(5) {
        .key {
          &:first-child {
            width: 18%;
          }

          &:last-child {
            width: 16%;
          }
        }
      }

      &:nth-child(6) {
        .key {
          &:first-child {
            width: 12%;
          }

          &:nth-child(5) {
            width: 50%;
          }

          &:first-child {
            width: 11%;
          }
        }
      }
    }

    .keypad {
      margin-top: 5%;
      width: 35%;
      height: 40px;
      background-color: #e7e7e7;
    }
  }
`
