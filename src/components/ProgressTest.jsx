import React from "react";
import Progress from "antd/es/progress";
import styled from "@emotion/styled";
const ProgressComp = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  .title {
    align-items: center;
    font-size: large;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e9f0f8;
    padding-bottom: 1rem;
  }
  .data {
    margin: 1rem 0rem;
  }
  .data-title {
    display: flex;
    font-weight: 800;
    justify-content: space-between;
    p:first-of-type {
      &:after {
        font-weight: 300;
        content: "    facebook";
        color: #c9cacc;
      }
    }
  }
`;
function ProgressTest(props) {
  // const config = {
  //   height: 20,
  //   width: 300,
  //   autoFit: false,
  //   percent: props.value,
  //   barWidthRatio: 0.2,
  //   color: ["#F4664A", "#E8EDF3"],
  // };
  return (
    <ProgressComp>
      <p className="title">{props.title}</p>
      <div>
        <div className="data">
          <div className="data-title">
            <p>{props.num}</p>
            <p>{props.value * 100}%</p>
          </div>
          <Progress percent={props.value * 100} showInfo={false} />
        </div>
      </div>
    </ProgressComp>
  );
}

export default ProgressTest;
