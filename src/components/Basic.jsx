import React, { useState, useContext, useEffect } from "react";
import ChartPie from "../components/ChartPie";
import ChartBar from "../components/ChartBar";
import dataContext from "../context/dataContext";
function Basic() {
  const { data } = useContext(dataContext);
  const [genderData, setGenderData] = useState({});
  const [ageData, setAgeData] = useState({});
  const [majorData, setMajorData] = useState({});
  const [areaData, setAreaData] = useState({});
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

  const collectAge = () => {
    const genderList = { 男: 0, 女: 0 };
    const ageList = {};
    const majorList = {};
    const areaList = {};
    data.forEach((element) => {
      const { gender, age, major, company, first_job, works } = element;
      const { area, industry, salary } = company;
      if (gender === "男性") {
        genderList["男"]++;
      } else {
        genderList["女"]++;
      }
      addCount(ageList, age);
      addCount(majorList, major);
      addCount(areaList, area);
      // if (!(age in ageList)) {
      //   ageList[age] = 1;
      // } else {
      //   ageList[age]++;
      // }
      // if (!(major in majorList)) {
      //   majorList[major] = 1;
      // } else {
      //   majorList[major]++;
      // }
      // if(!()){
      //     areaList
      // }
    });
    setGenderData(genderList);
    setAgeData(ageList);
    setMajorData(majorList);
    console.log("genderList", genderList);
    console.log("ageList", ageList);
  };

  const collectGender = () => {};

  const collectSchool = () => {};

  const collectMajor = () => {};
  return (
    <div>
      <ChartPie chartValue={genderData} />
      <ChartBar chartValue={ageData} />
      <h1 className="text-2xl bg-red-300">224</h1>
    </div>
  );
}

export default Basic;
