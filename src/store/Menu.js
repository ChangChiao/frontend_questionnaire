import { atom } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: [
    { id: "index", name: "首頁", icon: "menu", path: "/" },
    {
      id: "Info",
      name: "資料庫監控",
      icon: "share",
      path: "",
      subList: [
        { id: "InfoBoard", name: "儀錶板", path: "/infoboard" },
        { id: "InfoInfo", name: "即時資訊", path: "/infoinfo" },
        { id: "InfoHistory", name: "歷史資訊", path: "/infohistory" },
      ],
    },
    {
      id: "Set",
      name: "監控設定",
      icon: "share",
      path: "",
      subList: [
        { id: "SetAdd", name: "連線-新增", path: "/setadd" },
        { id: "SetEdit", name: "連線-修改", path: "/setedit" },
        { id: "SetWarn", name: "警告值", path: "/setwarn" },
        { id: "SetDay", name: "保留天數", path: "/setday" },
      ],
    },
    {
      id: "demo",
      name: "DEMO",
      icon: "share",
      path: "",
      subList: [
        { id: "waf", name: "template", path: "/temp" },
        { id: "login", name: "登入頁", path: "/login" },
        { id: "dns", name: "recoil DEMO", path: "/recoil" },
        { id: "chart", name: "chart DEMO", path: "/chart" },
        { id: "demo-1", name: "test1", path: "/test1" },
      ],
    },
  ],
});
