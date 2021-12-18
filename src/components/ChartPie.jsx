import React, { useState, useEffect } from "react";
import { Pie, G2 } from "@ant-design/charts";

const DemoPie = ({ chartValue }) => {
  const G = G2.getEngine("canvas");
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

  const cfg = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}位 ${(data.percent * 100).toFixed(0)}%`,
            fill: "#ccc",
            fontWeight: 700,
          },
        });
        return group;
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
  };
  const config = cfg;
  return <Pie {...config} />;
};

export default DemoPie;
