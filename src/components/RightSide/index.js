import React, { useState, useEffect } from "react";
import Input from "./Input";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import LinkToManagePassword from "./LinkToManagePassword";
import { logout, login, getCaptcha } from "../../services/apiService";

const RightSide = () => {
  const [username, setUserName] = useState("");
  const [password, setPssword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captcha_key, setCaptchaKey] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [isLOading, setIsLoading] = useState(false);

  useEffect(() => {
    if (successLogin) {
      setPssword("");
      setCaptcha("");
      setCaptchaImage("");
      setCaptchaKey("");
    } else {
      getCaptcha()
        .then(response => {
          setCaptchaImage(`data:image/png;base64, ${response.data.captcha}`);
          setCaptchaKey(response.data.captcha_key);
        })
        .catch(error => {
          alert("مشکلی پیش آمده لطفا صفحه را بروزرسانی کنید");
        });
    }
  }, [successLogin]);

  function sumbitLogin(e) {
    e.preventDefault();
    if (!successLogin) {
      setIsLoading(true);
      login({
        username,
        password,
        captcha_key,
        captcha,
        mode: 191
      })
        .then(response => {
          setSuccessLogin(true);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);

          alert("error");
        });
    } else {
      logout(username)
        .then(response => {
          setUserName("");
          setSuccessLogin(false);
        })
        .catch(error => {
          alert("error");
        });
    }
  }

  const isDisableSubmit = !username || !password || !captcha || isLOading;

  return (
    <form onSubmit={sumbitLogin} className="login-form validate-form">
      <FormHeader />
      {successLogin && (
        <div className="success-login-message">با موفقیت وارد شدید</div>
      )}
      <Input
        onChange={e => {
          setUserName(e.target.value);
        }}
        readOnly={successLogin}
        value={username}
        type="number"
        name="id"
        label="شماره دانشجویی"
      />
      {!successLogin && (
        <>
          <Input
            onChange={e => {
              setPssword(e.target.value);
            }}
            value={password}
            type="password"
            name="password"
            label="رمز عبور"
          />
          <div className="captcha-wrapper">
            <img className="captcha" src={captchaImage} />
          </div>
          <Input
            onChange={e => {
              setCaptcha(e.target.value);
            }}
            value={captcha}
            autoComplete="off"
            type="number"
            name="captcha"
            label="لطفا ارقام تصویر بالا را وارد نمایید"
          />
        </>
      )}
      <LoginButton
        isLOading={isLOading}
        isDisable={isDisableSubmit}
        successLogin={successLogin}
      />
      <LinkToManagePassword />
    </form>
  );
};

export default RightSide;
