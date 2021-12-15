import React, { useState, useContext, useEffect } from "react";
import DemoGauge from "../components/DemoGauge";
import PieChartTest from "../components/PieChartTest";
import BarChart from "../components/BarChart";
import ProgressTest from "../components/ProgressTest";
import Slider from "antd/es/slider";
import dataContext from "../context/dataContext";

function Chart() {
  const {data} = useContext(dataContext);
  const [genderData, setGenderData] = useState({});
  const [ageData, setAgeData] = useState({})
  const [majorData, setMajorData] = useState({})
  useEffect(() => {
    console.log("context----", data);
    data.length > 0 && collectAge()
  }, [data]);

  const collectAge = () => {
    const genderList = {male:0, female:0}
    const ageList = {}
    const majorList = {}
    data.forEach(element => {
      const {gender, age, major, company, first_job, works} = element
      if(gender === "男性"){
        genderList.male++
      }else{
        genderList.female++
      }
      if(!(age in ageList)){
        ageList[age] = 1
      }else{
        ageList[age]++
      }
      if(!(major in majorList)){
        majorList[major] = 1
      }else{
        majorList[major]++
      }
    });
    setGenderData(genderList);
    setAgeData(ageList);
    setMajorData(majorList)
    console.log("genderList", genderList);
    console.log("ageList", ageList);
  }

  const collectGender = () => {

  }

  const collectSchool = () => {

  }

  const collectMajor = () => {

  }

  const barData = [
    {
      name: "#4473c5",
      日期: "20211101",
      月均降雨量: 18.9,
    },
    {
      name: "#ed7d31",
      日期: "20211101",
      月均降雨量: 12.4,
    },
    {
      name: "#4473c5",
      日期: "20211102",
      月均降雨量: 28.8,
    },
    {
      name: "#ed7d31",
      日期: "20211102",
      月均降雨量: 23.2,
    },
    {
      name: "#4473c5",
      日期: "20211103",
      月均降雨量: 39.3,
    },
    {
      name: "#ed7d31",
      日期: "20211103",
      月均降雨量: 34.5,
    },
    {
      name: "#4473c5",
      日期: "20211104",
      月均降雨量: 81.4,
    },
    {
      name: "#ed7d31",
      日期: "20211104",
      月均降雨量: 99.7,
    },
    {
      name: "#4473c5",
      日期: "20211105",
      月均降雨量: 47,
    },
    {
      name: "#ed7d31",
      日期: "20211105",
      月均降雨量: 52.6,
    },
    {
      name: "#4473c5",
      日期: "20211106",
      月均降雨量: 20.3,
    },
    {
      name: "#ed7d31",
      日期: "20211106",
      月均降雨量: 35.5,
    },
    {
      name: "#4473c5",
      日期: "20211107",
      月均降雨量: 24,
    },
    {
      name: "#ed7d31",
      日期: "20211107",
      月均降雨量: 37.4,
    },
    {
      name: "#4473c5",
      日期: "20211108",
      月均降雨量: 35.6,
    },
    {
      name: "#ed7d31",
      日期: "20211108",
      月均降雨量: 42.4,
    },
  ];

  const [state, setState] = useState(0.75);
  const sliderChange = (changeValue) => {
    setState(changeValue / 100);
  };
  const pieData = [
    {
      type: "食",
      value: 27,
    },
    {
      type: "衣",
      value: 25,
    },
    {
      type: "住",
      value: 18,
    },
    {
      type: "行",
      value: 15,
    },
    {
      type: "育",
      value: 10,
    },
    {
      type: "樂",
      value: 5,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl bg-red-300">224</h1>
      <Slider defaultValue={30} onChange={sliderChange} />
      <DemoGauge
        className="block"
        value={state}
        title="自定義標題"
        color="#30BF78"
      />
      <br />
      <BarChart
        className="block"
        data={barData}
        interval={10}
        // color={["#4473c5", "#ed7d31"]}
        title="DB使用量"
      />
      <br />
      <PieChartTest data={pieData} title="自訂標題" />
      <br />
      <ProgressTest title="流量來源" value={0.6} num={813} />
    </div>
  );
}

export default Chart;
