import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Crumbs from "@/components/Crumbs";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
const DefaultComp = styled.div`
  display: flex;
`;

function Default() {
  return (
    <DefaultComp>
      <Menu />
      <Header />
      <div className="wrapper ">
        <Crumbs />
        <Outlet />
      </div>
    </DefaultComp>
  );
}

export default Default;
