import axios from "axios";
import qs from "qs";
import { API_URL } from "../global/constant";
const setHeader = () => {
  return {
    "Content-Type": "application/x-www-form-urlencoded",
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

export const getAjax = (url = API_URL, sendData = {}) => {
  let data = JSON.parse(JSON.stringify(sendData));
  data = qs.stringify(filterEmpty(data));
  return apiInstance
    .get(url, data)
    .then((response) => {
      console.log("response", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
