import React, { useEffect } from "react";

function Index() {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>首頁環境為{import.meta.env.VITE_BASIC_TYPE}</h1>
    </div>
  );
}

export default Index;
