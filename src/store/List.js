import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // configuration stay the same too
  storage: localStorage,
});

export const itemsState = atom({
  key: "itemsState",
  default: [
    {
      description: "Don't be lazy, write the post of the week 😬",
      done: false,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

const unfinishedItemsState = selector({
  key: "unfinishedItemsState",
  get: ({ get }) => {
    const items = get(itemsState);

    return items.filter((item) => item.done === false);
  },
});

export const unfinishedItemsCountState = selector({
  key: "unfinishedItemsCountState",
  get: ({ get }) => {
    const items = get(unfinishedItemsState);
    return items.length;
  },
});
