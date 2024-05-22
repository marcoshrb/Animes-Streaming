import { useEffect, useState } from "react";
import NavBarComponent from "../../components/Navbar2";
import CardVideo from "../../components/cardVideo";

//styles
import style from "./Video.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VideoPage() {
    const { TitleVideo } = useParams();
    console.log(TitleVideo);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        ResFilmeBack();
    }, [TitleVideo]);

    async function ResFilmeBack() {
        try {
            const res = await axios.get(`http://localhost:8080/video/GetByTitle/${TitleVideo}`);
            if (res.data) {
                setVideo(res.data);
            } else {
                console.log("Resposta da API inesperada:", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style["body-Login"]}>
            <NavBarComponent />
            {video ? <CardVideo video={video} /> : <p>Carregando...</p>}
        </div>
    );
}
