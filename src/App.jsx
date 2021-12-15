import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chart from "./page/Chart";
import { getAjax } from "./utils/api";
import Loading from "./components/Loading";
import dataContext from "./context/dataContext";

function App() {
  const [data, setData] = useState([]);
  const { Provider } = dataContext;
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getAjax();
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    console.log("data", data);
  }, [data])
  return (
    <Provider value={{data}}>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
          <Route exact path="/" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
