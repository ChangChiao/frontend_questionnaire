import persist from "./persist";
import { atom, selector } from "recoil";
import { getAjax } from "../utils/api";
import { apiPortalState } from "./apiPortal";

export const envState = atom({
  key: "envState",
  default: [],
  effects_UNSTABLE: [persist],
});

export const envNameState = atom({
  key: "envNameState",
  default: [],
  effects_UNSTABLE: [persist],
});

export const envSelected = atom({
  key: "envSelected",
  default: "",
  effects_UNSTABLE: [persist],
});

export const environmentSelected = atom({
  key: "environmentSelected",
  default: "",
  effects_UNSTABLE: [persist],
});

export const getEnvState = selector({
  key: "getEnvState",
  get({ get }) {
    return get(envState);
  },
});

export const setEnvState = selector({
  key: "setEnvState",
  async get({ get }) {
    // const env = get(envState);
    // console.log("env", env);
    const portal = get(apiPortalState);
    console.warn("portal", portal);
    // if (envState.length > 0) return envState;
    try {
      const res = await getAjax(portal + "/api/environment/list");
      const { resultMap, resultCode } = res;
      console.warn("res", res);
      return resultCode === "000" ? resultMap.list : [];
    } catch (error) {
      return [];
    }
  },
  set({ set }, newValue) {
    set(envState, newValue);
  },
});

export const setEnvName = selector({
  key: "setEnvName",
  async get({ get }) {
    const env = get(envSelected);
    // console.log("env", env);
    const portal = get(apiPortalState);
    try {
      let data = {
        environment: env,
      };
      const res = await getAjax(portal + "/api/environment/name/list", data);
      const { resultMap, resultCode } = res;
      console.warn("res", res);
      return resultCode === "000" ? resultMap.list : [];
    } catch (error) {
      return [];
    }
  },
  set({ set }, newValue) {
    set(envNameState, newValue);
  },
});
