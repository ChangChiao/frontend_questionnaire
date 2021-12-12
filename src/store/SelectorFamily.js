import { selectorFamily } from "recoil";

export const userState = selectorFamily({
  key: "userFam",
  get: (userId) => async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const userData = await res.json();
    return userData;
  },
});
