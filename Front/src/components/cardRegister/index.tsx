//react features
import { useState } from "react";

//styles
import style from "./CardRegister.module.css";

//bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//internal components
import ProfilePic from "../profilePicture";

export default function CardRegister() {
  const [profileImage, setProfileImage] = useState('');

  const handleProfileImageChange = (newSrc: string) => {
    setProfileImage(newSrc);
  };

  return (
    <div className={style.body}>
      <Card className={style.card}>
        <Card.Body className={style.card_body}>
          <div className={style.card_content_wrapper}>
            <Form className={style.form}>
            <Form.Floating className={style.input_form}>
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Username:"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingInputCustom">Username:</label>
                </Form.Floating>
                <Form.Floating className={style.input_form}>
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="Email:"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingInputCustom">Email:</label>
                </Form.Floating>
                <Form.Floating className={style.input_form}>
                  <Form.Control
                    id="floatingInputCustom"
                    type="password"
                    placeholder="Password:"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingInputCustom">Password:</label>
                </Form.Floating>
                <Form.Floating className={style.input_form}>
                  <Form.Control
                    id="floatingInputCustom"
                    type="password"
                    placeholder="ConfirmPassword:"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingInputCustom">Confirm Password:</label>
                </Form.Floating>
            </Form>
            <div className={style.right_components}>
              <ProfilePic src={profileImage} onChange={handleProfileImageChange} />
                <button className={style.btn_register} type="button">CREATE ACCOUNT</button>
              <p className={style.link}>Já possui uma conta?<a href="/"><span> Log In</span></a></p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
