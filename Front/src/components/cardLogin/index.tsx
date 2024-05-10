import style from "./CardLogin.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import reactSvg from '../../assets/react.svg';

function CardLogin() {

  return (
    <>
      <div className={style["body_Card"]}>
        <div className={style["img-Card"]}>
          <img src={reactSvg} className={style["img-User"]}></img>
        </div>
        <div className={style["Div-inputs"]}>

          <Form.Floating className="mb-3" style={{width: '70%', marginTop: '10%'}}>
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="User or Email:"
            />
            <label htmlFor="floatingInputCustom">User or Email:</label>
          </Form.Floating>
          <Form.Floating className="mb-3" style={{width: '70%', marginTop: '10%'}}>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password:</label>
          </Form.Floating>
          <div className={style["Button"]}>
            <Button variant="outline-light" className={style["LOG-IN"]}>LOG IN</Button>{' '}
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '5%'}}>
          <a className={style["link-Create"]}>Create Account</a>
        </div>
      </div>

    </>
  )
}

export default CardLogin
