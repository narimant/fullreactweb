import React from "react";
import { Link } from 'react-router-dom'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/TopBar/TopBar";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import "./Login.css";
import { requiredValidator,minValidator,maxValidator,emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";

export default function Login() {

  const [formState,onInputHandler]=useForm({
    username:{
      value:'',
      isValid:false
    },
    password:{
      value:'',
      isValid:false
    }
  },false);



  const login=(e)=>{
    e.preventDefault();
    console.log('login');
  }
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                id="password"
                type="password"
                placeholder="رمز عبور"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18)

                ]}
              onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button className="login-form__btn" type="submit" onClick={login} disabled={!formState.isFormValid}>
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input className="login-form__password-checkbox" type="checkbox" />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}