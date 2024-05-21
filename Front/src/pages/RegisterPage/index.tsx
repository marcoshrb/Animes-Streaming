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
                    <div className={style.card_area}>
                        <CardRegister />
                    </div>
                </div>
            </Container>
        </>
    );
}