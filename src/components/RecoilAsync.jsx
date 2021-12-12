import React, { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { userIdState, userState } from "../store/User";
import { getAjax } from "../utils/api";
import { useRecoilValue } from "recoil";
import { apiPortalState } from "../store/apiPortal";
function RecoilAsync() {
  //非同步 useRecoilValueLoadableLoadable
  const [userId, setUserId] = useRecoilState(userIdState);
  const user = useRecoilValueLoadable(userState);
  const portal = useRecoilValue(apiPortalState);
  let state = [];
  const fetchData = async () => {
    state = await getAjax(portal + "/api/dashboard");
  };
  useEffect(() => {
    fetchData().then(() => {
      console.log("fetchData", state);
    });
  }, []);
  return (
    <>
      <h1 style={{ padding: "20px 0" }}>recoild async</h1>
      <select
        placeholder="Choose a user"
        value={userId}
        onChange={(event) => {
          const value = event.target.value;
          setUserId(value ? parseInt(value) : undefined);
        }}
      >
        <option value="">Please select</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      {user?.contents && (
        <>
          <p style={{ padding: "8px 0" }}>{user.contents.name}</p>
          <p>{user.contents.phone}</p>
          <p>{user.contents.email}</p>
        </>
      )}
    </>
  );
}

export default RecoilAsync;
