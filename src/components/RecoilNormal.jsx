import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { itemsState, unfinishedItemsCountState } from "../store/List";
function RecoilNormal() {
  const unfinishedItemsCount = useRecoilValue(unfinishedItemsCountState);
  const [items, setItems] = useRecoilState(itemsState);
  const [value, setValue] = React.useState("");
  //read only = useRecoilValue
  //read and write = useRecoilState (re-render)
  //read write = useSetRecoilState (no re-render)
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(
      items.concat({
        description: value,
        done: false,
      }),
    );

    setValue("");
  };
  return (
    <>
      <h1 style={{ padding: "20px 0" }}>recoil demo</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button disabled={!value}>Add</button>
      </form>
      <h2 style={{ padding: "10px 0" }}>
        {" "}
        You have {unfinishedItemsCount} unfinished tasks!!
      </h2>
      {items.map((item, i) => (
        <div key={i}>{item.description}</div>
      ))}
    </>
  );
}

export default RecoilNormal;
