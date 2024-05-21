//styles
import style from "./AddFilme.module.css"

//bootstrap components
import Form from 'react-bootstrap/Form';

//internal components
import NavBarComponent from "../../components/Navbar2";
import { useState } from "react";

// axios
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function AddFilme() {
    
    const navigate = useNavigate();

    var [title, setTitle] = useState('');
    var [desc, setDesc] = useState('');
    var [url, setUrl] = useState('kkkkkkkkkkkkkkkkkkkkk.com');
    
    var [videoId, setVideoId] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const json = {
            Titulo: title,
            Descricao: desc,
            URL: url
        };

        try {
            
            var res = await axios.post("http://localhost:8080/video", json);
            console.log(res);
            console.log(res.data.message);

            
            setTitle('');
            setDesc('');
            setUrl('');

            
            const newVideoId = res.data.videoId;
            setVideoId(newVideoId);

            
            const jsonVideo = {
                VideoId: newVideoId
            };
            console.log(jsonVideo);

            
            res = await axios.post("http://localhost:8080/filme", jsonVideo);
            console.log(res);
            console.log(res.data.message);

            navigate('/home');

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
                                    value={title}
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
                                    value={desc}
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
