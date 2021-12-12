import React from "react";
import { Column } from "@ant-design/charts";
import styled from "@emotion/styled";
const Conter = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function DoubleBarChart(props) {
  const originState = props.data;
  const [state, setState] = useState(originState);

  const data = state;
  const config = {
    data,
    isStack: true,
    isGroup: true,
    xField: "date",
    yField: "GB",
    seriesField: "category",
    groupField: "name",
    yAxis: {
      tickInterval: props.interval,
    },
    color: props.color,
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
      ],
    },
  };
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <Conter>
        <Column {...config} />
      </Conter>
    </div>
  );
}

export default DoubleBarChart;
