import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const ChartBar = ({ chartValue }) => {
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
    data,
    xField: "type",
    yField: "value",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    yAxis: {
      label: {
        style: {
          fill: "#ddd",
        },
      },
    },
    xAxis: {
      label: {
        style: {
          fill: "#ddd",
        },
      },
    },
    color: ({ type }) => {
      return type === "26~30 歲" ? "#FAAD14" : "#5B8FF9";
    },
    legend: false,
  };
  return <Column {...config} />;
};

export default ChartBar;
