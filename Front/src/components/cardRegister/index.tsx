//react features
import { useState } from "react";

//styles
import style from "./CardRegister.module.css";

//bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//internal components
import ProfilePic from "../profilePicture";

import { useNavigate } from 'react-router-dom';
import { SECRET } from "../../env";
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default function CardRegister() {

  const [profileImage, setProfileImage] = useState('');
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleProfileImageChange = (newSrc: string) => {
    setProfileImage(newSrc);
  };
  async function handleSubmit(e) {

    e.preventDefault();
    
    if (!formValid())
      return
    
    const json = {
      name, email, password, confirmPassword
    }
    
    const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
    
    try {
      var res = await axios.post("http://localhost:8080/user/register", 
        {jsonCrypt}
      )

      console.log(res)

      console.log(res.data.message);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      navigate('../');

    } catch (error) {
      console.log(error);
    }
  }

  function formValid() {

    if (!name.includes(' ')) {
      console.log('Insira nome e sobrenome')
      return false;
    }
    if (name.length < 5) {
      console.log('Insira um nome e sobrenome válidos')
      return false;
    }
    if (!email.includes('@')) {
      console.log('Insira um e-mail válidos')
      return false;
    }
    if (email.length < 5) {
      console.log('Insira um e-mail válido')
      return false;
    }
    if (confirmPassword !== password) {
      console.log('As senhas não conferem')
      return false;
    }
    if (password.length < 6) {
      console.log('Senha inferior a 6 caracteres')
      return false
    };

    return true
  }


  return (
    <div className={style.body}>
      <Card className={style.card}>
        <Card.Body className={style.card_body}>
          <div className={style.card_content_wrapper}>
            <Form className={style.form} onSubmit={handleSubmit}>
              <Form.Floating className={style.input_form}>
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Username:"
                  className={style.input_group}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Username:</label>
              </Form.Floating>
              <Form.Floating className={style.input_form}>
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="Email:"
                  className={style.input_group}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Email:</label>
              </Form.Floating>
              <Form.Floating className={style.input_form}>
                <Form.Control
                  id="floatingInputCustom"
                  type="password"
                  placeholder="Password:"
                  className={style.input_group}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Password:</label>
              </Form.Floating>
              <Form.Floating className={style.input_form}>
                <Form.Control
                  id="floatingInputCustom"
                  type="password"
                  placeholder="ConfirmPassword:"
                  className={style.input_group}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Confirm Password:</label>
              </Form.Floating>
              <div className={style.right_components}>
                <ProfilePic src={profileImage} onChange={handleProfileImageChange} />
                <button className={style.btn_register} type="submit">CREATE ACCOUNT</button>
                <p className={style.link}>Já possui uma conta?<a href="/"><span> Log In</span></a></p>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
