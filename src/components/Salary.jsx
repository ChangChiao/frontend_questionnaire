import React, { useState, useContext, useEffect } from "react";
import ChartPie from "../components/ChartPie";
import ChartBar from "../components/ChartBar";
import ChartDualAxes from "./ChartDualAxes";
import ChartCircle from "./ChartCircle";
import dataContext from "../context/dataContext";
function Salary() {
  const { data } = useContext(dataContext);
  const [seniorityData, setSeniorityData] = useState({});
  const [salaryData, setSalaryData] = useState({});
  const [industryData, setIndustryData] = useState({});
  const [satisfactionData, setSatisfactionData] = useState({});
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

  const sortOrder = (obj, order = "desc") => {
    var sortable = [];
    for (var key in obj) {
      sortable.push([key, obj[key]]);
    }
    sortable.sort((a, b) => {
      return order === "desc" ? b[1] - a[1] : a[1] - b[1];
    });
    const temp = {};
    for (let i = 0; i < sortable.length; i++) {
      const target = sortable[i];
      temp[target[0]] = target[1];
    }
    return temp;
  };

  const collectAge = () => {
    const seniorityList = {};
    const salaryList = {};
    const industryList = {};
    const satisfactionList = {};
    data.forEach((element) => {
      const { company, works } = element;
      const { job_tenure, salary, industry, salary_score } = company;
      addCount(seniorityList, job_tenure);
      addCount(salaryList, salary);
      addCount(industryList, industry);
      addCount(satisfactionList, salary_score);
    });
    // setGenderData(genderList);
    setSeniorityData(seniorityList);
    setSalaryData(sortOrder(salaryList));
    setIndustryData(soryByValue(industryList, 12));
    setSatisfactionData(satisfactionList);
  };

  //   const addSalary = (salaryList, job_tenure, salary) => {
  //     if (!salaryList[job_tenure]) {
  //       salaryList[job_tenure] = [];
  //     } else {
  //       salaryList[job_tenure].push(salary);
  //     }
  //   };

  //   const averageSalary = (salaryList) => {
  //     const obj = {};
  //     Object.keys(salaryList).forEach((key) => {
  //       const sum = salaryList[key].reduce((a, b) => a + b, 0);
  //       const avg = sum / salaryList[key].length;
  //       obj[key] = avg;
  //     });
  //     return obj;
  //   };

  return (
    <div>
      <div className="block p-6 mt-10">
        <h3 className="title">年資</h3>
        <ChartBar chartValue={seniorityData} />
      </div>
      <div className="block p-6 mt-10">
        <h3 className="title">年薪</h3>
        <ChartDualAxes chartValue={salaryData} />
      </div>
      <div className="block p-6 mt-10">
        <h3 className="title">產業分佈</h3>
        <ChartCircle chartValue={industryData} />
      </div>
      {/* <div className="row mt-10">
        <div className="block p-6 w-full mr-0 md:w-1/2 md:mr-4">
          <h3 className="title">性別比例</h3>
          <ChartPie chartValue={genderData} />
        </div>
        <div className="block p-6 w-full mr-0 md:w-1/2">
          <h3 className="title">教育程度</h3>
          <ChartBarH chartValue={educationData} />
        </div>
      </div> */}
      <div className="block p-6 mt-10">
        <h3 className="title">產業薪資與滿意度</h3>
        {/* <ChartBarH chartValue={majorData} /> */}
      </div>
    </div>
  );
}

export default Salary;
