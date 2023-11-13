import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/TopBar/TopBar";

import "./Register.css";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { emailValidator, maxValidator, minValidator, requiredValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/authContext";


export default function Register() {
  const BASE_URL="http://127.0.0.1:4000/v1/";
  const authContext=useContext(AuthContext);

  const [formState,onInputHandler]=useForm({
     name:{
      value:'',
      isValid:false
    },
    username:{
      value:'',
      isValid:false
    },
    password:{
      value:'',
      isValid:false
    },
    email:{
      value:'',
      isValid:false
    }
  },false);



  const registerNewUser=(e)=>{
    e.preventDefault();
    
    const newUserData={
      name: formState.inputs.name.value,
        username:formState.inputs.username.value ,
        email: formState.inputs.email.value,
        password:formState.inputs.password.value ,
        confirmPassword: formState.inputs.password.value
      }
    
   fetch(`${BASE_URL}auth/register`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newUserData)
   }).then(res=>res.json())
   .then(data=>{
    authContext.login(data.user,data.accessToken);
    
   })
  }


  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div className="login__new-member">
            <span className="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
          <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                element='input'
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(30)
                  ]}
                  onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری"
                element='input'
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(18)
                  ]}
                  onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                id='email'
                type="text"
                placeholder="آدرس ایمیل"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(50),
                  emailValidator()
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                id='password'
                type="password"
                placeholder="رمز عبور"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button className="login-form__btn" type="submit" onClick={registerNewUser}  disabled={!formState.isFormValid}>
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
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
