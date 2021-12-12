import React, { useState } from "react";
import { Column } from "@ant-design/charts";
import styled from "@emotion/styled";
const Conter = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function BarChart(props) {
  const originState = props.data;
  const allTime = () => {
    setState(originState);
    setActive(1);
  };
  const thisYear = () => {
    setState(props.data.slice(0, 12));
    setActive(2);
  };
  const thisWeek = () => {
    setState(props.data.slice(0, 8));
    setActive(3);
  };
  const Today = () => {
    setState(props.data.slice(0, 4));
    setActive(4);
  };

  const [state, setState] = useState(originState);

  const [active, setActive] = useState(1);

  const data = state;
  const config = {
    data,
    isGroup: true,
    xField: "日期",
    yField: "月均降雨量",
    seriesField: "name",

    yAxis: {
      tickInterval: props.interval,
    },

    // 设置颜色
    color: props.color,

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        },
        // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        },
        // 数据标签文颜色自动调整
        // {
        //   type: "adjust-color",
        // },
      ],
    },
  };
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <Conter>
        <button
          className={active == 1 ? "ChartBtn--active" : "ChartBtn"}
          onClick={allTime}
        >
          All time
        </button>
        <button
          className={active == 2 ? "ChartBtn--active" : "ChartBtn"}
          onClick={thisYear}
        >
          This year
        </button>
        <button
          className={active == 3 ? "ChartBtn--active" : "ChartBtn"}
          onClick={thisWeek}
        >
          This week
        </button>
        <button
          className={active == 4 ? "ChartBtn--active" : "ChartBtn"}
          onClick={Today}
        >
          Today
        </button>
      </Conter>
      <Conter>
        <Column {...config} />
      </Conter>
    </div>
  );
}

export default BarChart;
