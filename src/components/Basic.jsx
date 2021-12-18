import React, { useState, useContext, useEffect } from "react";
import ChartPie from "../components/ChartPie";
import ChartBar from "../components/ChartBar";
import ChartBarH from "./ChartBarH";
import dataContext from "../context/dataContext";
function Basic() {
  const { data } = useContext(dataContext);
  const [genderData, setGenderData] = useState({});
  const [ageData, setAgeData] = useState({});
  const [majorData, setMajorData] = useState({});
  const [areaData, setAreaData] = useState({});
  const [educationData, setEducation] = useState({});
  useEffect(() => {
    console.log("context----", data);
    data.length > 0 && collectAge();
  }, [data]);

  const addCount = (obj, key) => {
    if (!(key in obj)) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  };

  const soryByValue = (obj, num = 6) => {
    var sortable = [];
    for (var key in obj) {
      sortable.push([key, obj[key]]);
    }
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });
    const temp = {};
    for (let i = 0; i < num; i++) {
      const target = sortable[i];
      temp[target[0]] = target[1];
    }
    return temp;
  };

  const collectAge = () => {
    const genderList = { 男: 0, 女: 0 };
    const ageList = {};
    const majorList = {};
    const areaList = {};
    const educationList = {};
    data.forEach((element) => {
      const { gender, age, major, company, works, education } = element;
      const { area, industry, salary } = company;
      if (gender === "男性") {
        genderList["男"]++;
      } else {
        genderList["女"]++;
      }
      addCount(ageList, age);
      addCount(majorList, major);
      addCount(areaList, area);
      addCount(educationList, education);
    });
    setGenderData(genderList);
    setAgeData(ageList);
    setMajorData(soryByValue(majorList));
    setAreaData(soryByValue(areaList));
    setEducation(educationList);
    console.log("genderList", genderList);
    console.log("ageList", ageList);
  };

  return (
    <div>
      <div className="row mt-10">
        <div className="block p-6 w-full mr-0 md:w-1/2 md:mr-4">
          <h3 className="title">地區</h3>
          <ChartBar chartValue={areaData} />
        </div>
        <div className="block p-6 w-full mr-0 md:w-1/2">
          <h3 className="title">年齡</h3>
          <ChartBar chartValue={ageData} />
        </div>
      </div>
      <div className="row mt-10">
        <div className="block p-6 w-full mr-0 md:w-1/2 md:mr-4">
          <h3 className="title">性別比例</h3>
          <ChartPie chartValue={genderData} />
        </div>
        <div className="block p-6 w-full mr-0 md:w-1/2">
          <h3 className="title">教育程度</h3>
          <ChartBarH chartValue={educationData} />
        </div>
      </div>
      <div className="block p-6 mt-10">
        <h3 className="title">科系</h3>
        <ChartBarH chartValue={majorData} />
      </div>
    </div>
  );
}

export default Basic;
