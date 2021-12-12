import React from "react";
import { Gauge } from "@ant-design/charts";
import styled from "@emotion/styled";
const GaugeConter = styled.div`
  width: 80%;
  margin: 0 auto;
  .title {
    background: var(--purple_light);
    position: absolute;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
    width: 80px;
    padding: 5px;
    font-weight: normal;
    text-align: center;
  }
`;

function DemoGauge(props) {
  const config = {
    percent: props.value,
    range: {
      color: props.color,
    },
    height: 250,
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
        style: {
          color: "rgba(0,0,0,0.65)",
          fontSize: 14,
        },
      },
    },
  };
  return (
    <div className={props.className}>
      <GaugeConter>
        <div className="title">{props.title}</div>
        <Gauge {...config} />
      </GaugeConter>
    </div>
  );
}

export default DemoGauge;
