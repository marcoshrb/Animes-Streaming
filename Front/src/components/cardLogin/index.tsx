//react features
import { useState, useContext } from "react";

//styles
import style from "./CardLogin.module.css";

//bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//internal components
import ProfilePic from "../profilePicture";

import { useNavigate } from 'react-router-dom';
import { SECRET } from "../../env";
import CryptoJS from 'crypto-js';
import axios from 'axios';

import { UserIdContext } from "../../context/UserId";

function CardLogin() {

  const { idUser, setIdUser} = useContext(UserIdContext);

  const [profileImage, setProfileImage] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleProfileImageChange = () => {
    
  };

  async function handleSubmit(e) {

    e.preventDefault();

    if (!formValid())
      return

    const json = {
      login, password
    }
   
    const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();

    try {
      var res = await axios.post("http://localhost:8080/user",
        { jsonCrypt }
      )

      console.log(res)
      console.log(res.data.message);
      
      setIdUser(res.data.userId);

      setLogin('');
      setPassword('');

      sessionStorage.setItem('token', res.data.token);
      navigate('/home')

    } catch (error) {
      console.log(error);
    }
  }

  function formValid() {
    if (!login.includes('@')) {
      console.log('Insira um e-mail válidos')
      return false;
    }
    if (login.length < 5) {
      console.log('Insira um e-mail válido')
      return false;
    }
    return true
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={style["body_Card"]}>
          <Form onSubmit={handleSubmit}>
            <div className={style["img-Card"]}>
              <ProfilePic src="../../../src/assets/img/background2.png" onChange={handleProfileImageChange} />
            </div>
            <div className="row">
              <div className="col-12">
                <div className={style["Div-inputs"]}>
                  <Form.Floating className={style.input_form} style={{ width: '70%', marginTop: '10%' }}>
                    <Form.Control
                      id="floatingInputCustom"
                      type="email"
                      placeholder="Email:"
                      className={style.input_group}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">User or Email:</label>
                  </Form.Floating>
                  <Form.Floating className={style.input_form} style={{ width: '70%', marginTop: '10%' }}>
                    <Form.Control
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Password"
                      className={style.input_group}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Password:</label>
                  </Form.Floating>
                  <div className={style["Button"]}>
                    <Button variant="outline-light" type="submit" className={style["LOG-IN"]}>LOG IN</Button>{' '}
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '5%' }}>
                  <a className={style["link-Create"]} href="/register">Create Account</a>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>

    </>
  )
}

export default CardLogin
