import React, { useState, useContext, useEffect } from "react";
import ChartBar from "../components/ChartBar";
import ChartDualAxes from "./ChartDualAxes";
import ChartCircle from "./ChartCircle";
import ChartLine from "./ChartLine";
import dataContext from "../context/dataContext";
function Salary() {
  const { data } = useContext(dataContext);
  const [seniorityData, setSeniorityData] = useState({});
  const [salaryData, setSalaryData] = useState({});
  const [industryData, setIndustryData] = useState({});
  const [satisfactionData, setSatisfactionData] = useState({});
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
      const { company } = element;
      const { job_tenure, salary, industry, salary_score } = company;
      addCount(seniorityList, job_tenure);
      addCount(salaryList, salary);
      addCount(industryList, industry);
      addSalary(satisfactionList, industry, salary_score);
    });
    setSeniorityData(seniorityList);
    setSalaryData(sortOrder(salaryList));
    const sortedIndustry = soryByValue(industryList, 12);
    setIndustryData(sortedIndustry);
    const obj = averageSalary(satisfactionList, sortedIndustry);
    setSatisfactionData(obj);
  };

  const addSalary = (satisfactionList, industry, salary_score) => {
    if (!satisfactionList[industry]) {
      satisfactionList[industry] = [];
    } else {
      satisfactionList[industry].push(salary_score);
    }
  };

  const roundDecimal = (val, precision) => {
    return (
      Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
      Math.pow(10, precision || 0)
    );
  };

  const averageSalary = (satisfactionList, industryList) => {
    console.log("satisfactionList", satisfactionList, industryList);
    const temp = {};
    for (let key in industryList) {
      temp[key] = satisfactionList[key];
    }
    console.log("new@@@", temp);
    const obj = {};
    Object.keys(temp).forEach((key) => {
      const sum = temp[key].reduce((a, b) => Number(a) + Number(b), 0);
      const avg = sum / temp[key].length;
      console.log("avg", avg);
      obj[key] = roundDecimal(avg, 2);
    });
    console.log("?????----", obj);
    return obj;
  };

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
      <div className="block p-6 mt-10">
        <h3 className="title">產業薪資滿意度</h3>
        <ChartLine chartValue={satisfactionData} />
      </div>
    </div>
  );
}

export default Salary;
