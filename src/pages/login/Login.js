import React, { useState, useEffect } from "react";
import "./css/login.css";
import $ from "jquery";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import imageOne from "../../assets/img/login/login-1.svg";
import imageTwo from "../../assets/img/login/login-2.svg";
import imageThree from "../../assets/img/login/login-3.svg";
import imageFour from "../../assets/img/login/login-4.svg";
import {useHistory } from 'react-router-dom'

export default function Login() {
  $(document).ready(function () {
    var height = $(window).height();

    $(".login-container").height(height);
  });

  const images = [imageOne, imageTwo, imageThree, imageFour];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nImage, setNImage] = useState(0);
  let imageToShow = images[nImage];

  useEffect(()=>{
    setNImage(Math.floor(Math.random() * 4));
    imageToShow = imageFour[nImage]
  },[])

  const history = useHistory(); 

  const login = () => {
    if(email === "miguelangelofl@hotmail.com" && password === "12345") {

      localStorage.setItem('user', JSON.stringify({
        "user": "miguel",
        "logged": "true"
      }))
      history.go('/')
    } else {
      alert("wrong password")
    }
  }

  return (
    <div className="login-container">
      <div className="login-component-container">
        <div className="login-component-title">Your Work</div>
        <div className="login-component-sub-title">Iniciar sesión</div>
        <div className="login-component-columns">
          <div className="login-component-image">
            <img src={imageToShow} alt="imageLogin" className="login-image" />
          </div>
          <div className="login-component-body">
            <div className="login-component-email">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-user" />
                <InputText
                  id="lefticon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-text"
                />
                <label htmlFor="lefticon">Email</label>
              </span>
            </div>
            <div className="login-component-password">
              <span className="p-float-label p-input-icon-left">
                <i className="pi pi-lock" />
                <InputText
                  id="lefticon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-text"
                  type="password"
                />
                <label htmlFor="lefticon">Password</label>
              </span>
            </div>
            <div className="login-component-button">
              <Button label="Iniciar sesión" className="button-primary" onClick={()=>{login()}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
