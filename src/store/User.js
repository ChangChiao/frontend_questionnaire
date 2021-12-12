import { atom, selector } from "recoil";

// 1. 這個狀態是給使用者切換用的
export const userIdState = atom({
  key: "userId",
  default: undefined,
});

// 2. 透過 selector 來 fetch data
export const userState = selector({
  key: "user",
  get: async ({ get }) => {
    const userId = get(userIdState);

    if (userId === undefined) return;

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const userData = await res.json();
    return userData;
  },
});
