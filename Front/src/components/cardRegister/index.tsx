//react features
import { useState } from "react";

//styles
import style from "./CardRegister.module.css";

//bootstrap components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React from 'react';

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
              <Form.Group className={style.input_form} controlId="Name">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control className={style.input_group} type="text" required placeholder="Name" />
              </Form.Group>
              <Form.Group className={style.input_form} controlId="Email">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control className={style.input_group} type="email" required placeholder="Email" />
              </Form.Group>
              <Form.Group className={style.input_form} controlId="Password">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control className={style.input_group} type="password" required placeholder="Password" />
              </Form.Group>
              <Form.Group className={style.input_form} controlId="ConfirmPassword">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control className={style.input_group} type="password" required placeholder="Confirm Password" />
              </Form.Group>
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
