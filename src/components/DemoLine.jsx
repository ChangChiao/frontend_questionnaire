import React from "react";
import { Line } from "@ant-design/charts";
import styled from "@emotion/styled";
const Conter = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function DemoLine(props) {
  const config = {
    data: props.data,
    xField: "date",
    yField: "value",
    seriesField: "category",
    color: ["#1979C9", "#D62A0D", "#FAA219"],
  };

  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <Conter>
        <Line {...config} onlyChangeData={true} />
      </Conter>
    </div>
  );
}

export default DemoLine;
