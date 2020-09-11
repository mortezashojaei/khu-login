import axios from "axios";

const BaseUrl = "http://localhost:5050";

const LoginServiceBaseUrl = "http://10.10.0.46:8090";

export const logout = (username) => {
  const form = new FormData();
  form.set("username", username);
  form.set("mode", 190);
  return axios.post(`${BaseUrl}/logout`, form);
};

export const login = ({ username, password, mode }) => {
  const form = new FormData();
  form.set("username", username);
  form.set("password", password);
  form.set("mode", mode);

  return axios.post(`${LoginServiceBaseUrl}/login.xml`, form);
};

export const getCaptcha = () => {
  return axios.get(`${BaseUrl}`);
};

export const getMainPageData = () => {
  return axios.get(`${BaseUrl}/main-page-data`);
};
