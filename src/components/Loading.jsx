import React from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";

const Load = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 36px;
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  top: 0px;
  right: 0;
  .loading-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .context {
    z-index: 999999;
    padding: 0 13% 0px 13%;
  }
  p {
    font-size: 13px;
    z-index: 999999;
    line-height: 22px;
  }
  .context:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
  .context:not(:required) {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  .context:not(:required):after {
    content: "";
    display: block;
    font-size: 10px;
    width: 0.5em;
    height: 0.5em;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.75) 1em 0 0 0,
      rgba(0, 0, 0, 0.75) 0.7em 0.7em 0 0, rgba(0, 0, 0, 0.75) 0 1em 0 0,
      rgba(0, 0, 0, 0.75) -0.7em 0.7em 0 0, rgba(0, 0, 0, 0.5) -1em 0 0 0,
      rgba(0, 0, 0, 0.5) -0.7em -0.7em 0 0, rgba(0, 0, 0, 0.75) 0 -1em 0 0,
      rgba(0, 0, 0, 0.75) 0.7em -0.7em 0 0;
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = () =>
  createPortal(
    <Load>
      <div className="popup-mask"></div>
      <div className="loading-wrapper">
        <div className="context"></div>
        <p>处理中，请稍后...</p>
      </div>
    </Load>,
    document.getElementById("loading"),
  );

export default Loading;
