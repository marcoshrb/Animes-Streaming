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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control className={style.input_group} type="email" placeholder="name@example.com" />
          </Form.Group>
          <button className={style.btn_register} type="button">CREATE ACCOUNT</button>
        </Form>
      </Card.Body>
    </Card>
  );
}
