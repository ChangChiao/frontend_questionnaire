import React from "react";
import RecoilNormal from "../components/RecoilNormal";
import RecoilAsync from "../components/RecoilAsync";
import RecoilFamily from "../components/RecoilFamily";
function Recoil() {
  return (
    <div>
      <RecoilNormal />
      <RecoilAsync />
      <RecoilFamily />
    </div>
  );
}

export default Recoil;
