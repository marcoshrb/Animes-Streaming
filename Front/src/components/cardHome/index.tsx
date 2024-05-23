import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

import style from "./cardHome.module.css";

import capaDefault from "../../assets/img/Kimetsu.png"

export default function CardHome() {
    const [videos, setVideos] = useState([]);
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        ResFilmesBack();
    }, []);

    async function ResFilmesBack() {
        try {
            const res = await axios.get("http://localhost:8080/filme/getAll");
            if (res.data && res.data.filmes) {
                setVideos(res.data.filmes);

                const filmesDetails = await Promise.all(res.data.filmes.map(async (video) => {
                    const videoDetails = await ResVideosBack(video.VideoId);

                    return {
                        titulo: videoDetails.Titulo,
                        url: videoDetails.URL
                    };
                }));

                setFilmes(filmesDetails);
            } else {
                console.log("Resposta da API inesperada:", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function ResVideosBack(videoId) {
        try {
            const res = await axios.get(`http://localhost:8080/video/GetById/${videoId}`);
            if (res.data) {
                return res.data;
            } else {
                console.log("Resposta da API inesperada:", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {filmes.length > 0 ? (
                filmes.map((filme, index) => (
                    <div key={index} className={style["card-Home"]}>
                        <Link className={style["links"]} to={`/video/${filme.titulo}`}>
                            <div className={style["body-card"]}>
                                <img className={style["capa"]} src={capaDefault}></img>
                            </div>
                            <p className={style["Title"]}>
                                {filme.titulo}
                            </p>
                        </Link>
                    </div>
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </>
        
    );
}
