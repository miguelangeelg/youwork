import React, { useState, useEffect } from "react";
import "./css/login.css";
import $ from "jquery";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import imageOne from "../../assets/img/login/login-1.svg";
import imageTwo from "../../assets/img/login/login-2.svg";
import imageThree from "../../assets/img/login/login-3.svg";
import imageFour from "../../assets/img/login/login-4.svg";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nImage, setNImage] = useState("");
  const [correctLogin, setCorrectLogin] = useState(null);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  let imageToShow = images[nImage];

  useEffect(() => {
    var height = $(window).height();

    $(".login-container").height(height);
    setNImage(Math.floor(Math.random() * 4));
    imageToShow = imageFour[nImage];
  }, []);

  const history = useHistory();

  const login = () => {
    validateForm();

    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    if (email === "miguelangelofl@hotmail.com" && password === "12345") {
      localStorage.setItem(
        "user", 
        JSON.stringify({
          user: "miguel",
          logged: "true",
        })
      );
      setCorrectLogin(true);
      history.go("/");
    } else {
      setCorrectLogin(false);
    }
  };

  const validateForm = () => {
    if (email.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        email: "Correo requerido",
      }));
    }

    if (password.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        password: "Contraseña requerida",
      }));
    }
  };

  const validInput = (name) => {
    if (errors[name]) {
      return true;
    } else {
      return false;
    }
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <small className="p-error p-error-message">{errors[name]}</small>
      )
    );
  };

  return (
    <div className="login-container">
      <div className="login-component-container">
        <div className="login-component-title">You Work</div>
        <div className="login-component-sub-title">Iniciar sesión</div>
        <div className="login-component-columns">
          <div className="login-component-image">
            <img src={imageToShow} alt="imageLogin" className="login-image" />
          </div>
          <div className="login-component-body">
            <div className="login-component-email">
              <span className="p-float-label p-input-icon-left">
                <i
                  className={`pi pi-user ${
                    validInput("password") ? "p-error" : ""
                  }`}
                />
                <InputText
                  id="lefticon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-text"
                />
                <label
                  htmlFor="lefticon"
                  className={` ${validInput("email") ? "p-error" : ""} `}
                >
                  Correo
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="login-component-password">
              <span className="p-float-label p-input-icon-left">
                <i
                  className={`pi pi-lock ${
                    validInput("password") ? "p-error" : ""
                  }`}
                />
                <InputText
                  id="lefticon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-text"
                  type="password"
                />
                <label
                  htmlFor="lefticon"
                  className={` ${validInput("password") ? "p-error" : ""} `}
                >
                  Contraseña
                </label>
              </span>
              {getFormErrorMessage("password")}
              {
                correctLogin === false ? 
                (
                  <small className="p-error p-error-message">Datos incorrectos</small>
                ) : (
                  <div></div>
                )
              }
            </div>
            <div className="login-component-button">
              <Button
                label="Iniciar sesión"
                className="button-primary"
                onClick={() => {
                  login();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
