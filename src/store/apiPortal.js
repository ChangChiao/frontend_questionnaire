import { atom, selector } from "recoil";
import persist from "./persist";

export const apiPortalState = atom({
  key: "apiPortalState",
  default: "",
  effects_UNSTABLE: [persist],
});

export const setApiPortal = selector({
  key: "setApiPortal",
  async get() {
    const res = await fetch(`/myConfig.json`);
    const jsonData = await res.json();
    return jsonData.api;
  },
  set({ set }, newValue) {
    set(apiPortalState, newValue);
  },
});
