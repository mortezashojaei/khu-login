import axios from "axios";

const BaseUrl = "http://localhost:5050";

const LoginServiceBaseUrl = "http://10.10.0.46:8090";

export const logout = (username) => {
  const form = new FormData();
  form.set("username", username);
  form.set("mode", 190);
  form.set("a", Date.now());
  form.set("producttype", 0);
  return axios.post(`${BaseUrl}/logout`, form, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const login = ({ username, password, mode }) => {
  const form = new FormData();
  form.set("username", username);
  form.set("password", password);
  form.set("mode", mode);
  form.set("a", Date.now());
  form.set("producttype", 0);
  
  return axios.post(`${LoginServiceBaseUrl}/login.xml`, form, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const checkCaptcha = ({ captcha, captcha_key }) =>
  axios.post(`${BaseUrl}/check-captcha`, { captcha, captcha_key });

export const getCaptcha = () => {
  return axios.get(`${BaseUrl}`);
};

export const getMainPageData = () => {
  return axios.get(`${BaseUrl}/main-page-data`);
};
