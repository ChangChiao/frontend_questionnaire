import axios from "axios";
import qs from "qs";
import { Cookie } from "./cookie";

const setHeader = () => {
  const token = Cookie("token");
  return {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${token}`,
  };
};

const apiInstance = axios.create({
  headers: setHeader(),
});

const filterEmpty = (obj) => {
  let data = JSON.parse(JSON.stringify(obj));
  Object.keys(data).forEach((item) => {
    if (data[item] === "" || data[item] === null || data[item] === undefined) {
      delete data[item];
    }
  });
  return data;
};

export const getAjax = (url, sendData = {}) => {
  let data = JSON.parse(JSON.stringify(sendData));
  data = qs.stringify(filterEmpty(data));
  return apiInstance
    .post(url, data)
    .then((response) => {
      console.log("response", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
