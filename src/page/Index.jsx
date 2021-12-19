import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Basic from "../components/Basic";
import Salary from "../components/Salary";
function Index() {
  const [state, setstate] = useState(0);
  useEffect(() => {}, []);
  return (
    <div className="p-10">
      <h1 className="text-center font-bold text-2xl text-primary-100">
        2021前端薪資調查
      </h1>
      <ul className="m-auto mt-6 w-72 p-1 h-10 flex items-center justify-between border border-gray-200 rounded-sm cursor-pointer">
        <li
          className={clsx(
            "w-1/2",
            "text-lg",
            "text-gray-200",
            "text-center",
            state === 0 && "bg-gray-500",
          )}
          onClick={() => {
            setstate(0);
          }}
        >
          基本資料
        </li>
        <li
          className={clsx(
            "w-1/2",
            "text-lg",
            "text-gray-200",
            "text-center",
            state === 1 && "bg-gray-500",
          )}
          onClick={() => {
            setstate(1);
          }}
        >
          薪資與產業
        </li>
      </ul>
      {state === 0 && (
        <div>
          <Basic />
        </div>
      )}
      {state === 1 && (
        <div>
          <Salary />
        </div>
      )}
    </div>
  );
}

export default Index;
