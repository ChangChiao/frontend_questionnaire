import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/charts";

const ChartCircle = ({ chartValue }) => {
  const [data, setDataList] = useState([]);
  useEffect(() => {
    let result = [];
    for (let key in chartValue) {
      const obj = {
        type: key,
        value: chartValue[key],
      };
      result.push(obj);
    }
    setDataList(result);
  }, [chartValue]);

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    legend: {
      itemName: {
        style: {
          fill: "#ddd",
        },
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#ddd",
        },
        content: "產業",
      },
    },
  };
  return <Pie {...config} />;
};

export default ChartCircle;
