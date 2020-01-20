import axios from "axios";

const BaseUrl = "http://localhost:3000";

export const logout = username => {
  return axios.post(`${BaseUrl}/logout`, {
    username,
    mode: 193
  });
};

export const login = body => {
  return axios.post(`${BaseUrl}/login`, body);
};

export const getCaptcha = () => {
  return axios.get(`${BaseUrl}`);
};

export const getMainPageData = () => {
  return axios.get(`${BaseUrl}/main-page-data`);
};
