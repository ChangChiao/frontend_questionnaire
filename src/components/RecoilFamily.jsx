import React, { Suspense, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "../store/SelectorFamily";
function RecoilFamily() {
  //非同步 useRecoilValueLoadable
  const [userId, setUserId] = useState();
  const UserData = ({ userId }) => {
    const user = useRecoilValueLoadable(userState(userId));
    return (
      user.contents && (
        <>
          <p style={{ padding: "8px 0" }}>{user.contents.name}</p>
          <p>{user.contents.phone}</p>
          <p>{user.contents.email}</p>
        </>
      )
    );
  };

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
      <Suspense fallback={<div>Loading...</div>}>
        <UserData userId={userId} />
      </Suspense>
    </>
  );
}

export default RecoilFamily;
