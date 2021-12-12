import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useMemo } from "react";
// import Default from "./layout/Default";
import Chart from "./page/Chart";
import Loading from "./components/Loading";
import loadingContext from "./context/loadingContext";

function App() {
  const [loading, setLoading] = useState(false);
  const value = useMemo(() => ({ loading, setLoading }), [loading]);
  const { Provider } = loadingContext;
  return (
    <Provider value={value}>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
          <Route exact path="/" element={<Chart />} />
        </Routes>
      </BrowserRouter>
      {loading && <Loading />}
    </Provider>
  );
}

export default App;
