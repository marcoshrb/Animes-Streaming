// styles
import style from "./CatalogAdmPage.module.css";

//bootstrap components
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';


// internal components
import NavBarComponent from "../../components/Navbar2";

export default function CatalogAdmPage() {
    const cards = [
        { title: "Card Title 1", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card Title 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card Title 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card Title 4", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card Title 5", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Card Title 6", text: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    ];

    return (
        <>
            <div className={style.body_Home_page}>
                <NavBarComponent />
                <div className={style.search_area}>
                    <h1 className={style.title}>CATÁLOGO</h1>
                    <Form>
                        <div className={style.search_container}>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className={style.input_search}
                            />
                            <button type="submit" className={style.search_btn}><SearchIcon /></button>
                        </div>
                    </Form>
                </div>

                <div className={style.btn_add_area}>
                    <button type="button" className={style.this_btn_add}>ADICIONAR NOVO TÍTULO</button>
                </div>

                    <Container className="mx-auto justify-content-between">
                        <Row className="mx-auto justify-content-betwee align-content-center">
                            {cards.map((card, index) => (
                                <Col key={index} xs={6} sm={12} md={4} className="mb-4 mt-5">
                                    <Card className={style.card}>
                                        <Card.Body>
                                            <Card.Title>{card.title}</Card.Title>
                                            <Card.Text>
                                                {card.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div className={style.btn_area}>
                                    <button type="button" className={style.btn_edit}>EDITAR</button>
                                    <button type="button" className={style.btn_delete}>DELETAR</button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
            </div>
        </>
    );
}
