//styles
import style from "./AddFilme.module.css"

//bootstrap components
import Form from 'react-bootstrap/Form';

//internal components
import NavBarComponent from "../../components/Navbar2";
import { useState } from "react";

export default function AddFilme() {

    var [title, setTitle] = useState('');
    var [desc, setDesc] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        try {


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBarComponent />
            <div className={style.body_Home_page}>
                <div className={style.welcome_container}>
                    <div className={style.title}>
                        <p>Adicionar Filme</p>
                    </div>
                </div>
                <div className={style.content_form}>
                    <div className={style.card}>
                        <Form className={style.form} onSubmit={handleSubmit}>
                            <div className={style["Capa-Movie"]}>

                            </div>
                            <Form.Floating className={style.input_form}>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="Título:"
                                    className={style.input_group}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Título:</label>
                            </Form.Floating>
                            <Form.Floating className={style.input_form}>
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="Descrição:"
                                    className={style.input_group}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Descrição:</label>
                            </Form.Floating>

                            <button className={style.butn} type="submit">Adicionar</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
