//styles
import style from "./Register.module.css";

//bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

//internal components
import CardRegister from "../../components/cardRegister";

export default function RegisterPage() {
    return (
        <>
        <Container>
            <div className={style.body}>
                <Row className="justify-content-center">
                    <Col xs={8} md={12}>
                        <div className={style.card_area}>
                            <CardRegister />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    );
}