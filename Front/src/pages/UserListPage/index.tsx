import { useEffect, useState } from "react";
import axios from "axios";

// styles
import style from "./UserList.module.css"

//bootstrap components
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

// internal components
import NavBarComponent from "../../components/Navbar2";
import ProfilePicture from "../../components/profilePicture";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const handleProfileImageChange = (newSrc: string) => {
        setProfileImage(newSrc);
      };

    useEffect(() => {
        const fetchUsers = async () => {

            try {
                const response = await axios.get("http://localhost:8080/getAll");
                setUsers(response.data.users);
            }
            catch (error) {
                setMessage('Erro ao retornar usuário');
            }
        }
        fetchUsers();
    }, [])

    return (
        <>
            <div className={style.body_Home_page}>
                <NavBarComponent />
                <div className={style.search_area}>
                    <h1 className={style.title}>LISTA DE USUÁRIOS</h1>
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

                <Container className="mx-auto justify-content-between">
                    <Row className="mx-auto justify-content-between align-content-center">
                        {users.map((user, index)=> (
                            <Col key={index} xs={6} sm={12} md={4} className="mb-4 m5-5">
                                <ProfilePicture/>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* <Container className="mx-auto justify-content-between">
                    <Row className="mx-auto justify-content-betwee align-content-center">
                        {users.map((user, index) => (
                            <Col key={index} xs={6} sm={12} md={4} className="mb-4 mt-5">
                                <Card className={style.card}>
                                    <Card.Body key={user.Id}>
                                        fotouser
                                    </Card.Body>
                                </Card>
                                        <p key={user.Id}>{user.Name}</p>
                                <div className={style.btn_area}>
                                    <button type="button" className={style.btn_delete}>DELETAR USUÁRIO</button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container> */}
            </div>
        </>
    );
}


