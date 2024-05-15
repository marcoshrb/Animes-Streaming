//react features
import { useState, useContext } from "react";

//styles
import style from "./CardLogin.module.css";

//bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//assets
import reactSvg from '../../assets/react.svg';

//internal components
import ProfilePic from "../profilePicture";

function CardLogin() {
  const [profileImage, setProfileImage] = useState('');

  const handleProfileImageChange = (newSrc: string) => {
    setProfileImage(newSrc);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
            <div className={style["body_Card"]}>
              <div className={style["img-Card"]}>
                <ProfilePic src={profileImage} onChange={handleProfileImageChange} />
              </div>
        <div className="row">
          <div className="col-12">
              <div className={style["Div-inputs"]}>
                <Form.Floating className={style.input_form} style={{ width: '70%', marginTop: '10%' }}>
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="User or Email:"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingInputCustom">User or Email:</label>
                </Form.Floating>
                <Form.Floating className={style.input_form} style={{ width: '70%', marginTop: '10%' }}>
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    className={style.input_group}
                  />
                  <label htmlFor="floatingPasswordCustom">Password:</label>
                </Form.Floating>
                <div className={style["Button"]}>
                  <Button variant="outline-light" className={style["LOG-IN"]}>LOG IN</Button>{' '}
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '5%' }}>
                <a className={style["link-Create"]}>Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardLogin
