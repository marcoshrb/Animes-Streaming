import style from "./CardRegister.module.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function CardRegister() {
  return (
    <Card>
      <Card.Body className={style.card_body}>
        <Form>
          <Form.Group className={style.input_form} controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control className={style.input_group} type="text" required placeholder="Name" />
          </Form.Group>
          <Form.Group className={style.input_form} controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control className={style.input_group} type="email" required placeholder="Email" />
          </Form.Group>
          <Form.Group className={style.input_form} controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control className={style.input_group} type="password" required placeholder="Password" />
          </Form.Group>
          <Form.Group className={style.input_form} controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control className={style.input_group} type="password" required placeholder="Confirm Password" />
          </Form.Group>
        </Form>
        <div className={style.right_components}>
          

          <button className={style.btn_register} type="button">CREATE ACCOUNT</button>
        </div>
      </Card.Body>
    </Card>
  );
}
