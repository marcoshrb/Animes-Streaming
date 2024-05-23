import style from "./CardVideo.module.css";
import Like from "./assets/like-svgrepo-com.svg";
import Dislike from "./assets/dislike-svgrepo-com.svg";
import CommentsWhite from "./assets/comments-3-svgrepo-com.svg";
import { useEffect } from "react";
import Coments from "../Coments";

function CardVideo({ video } : any) {
    
    useEffect(() => {
        console.log(video); // Verifique se os dados estão corretos
    }, [video]);

    if (!video) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <div className={style["body_Card"]}>
                <iframe
                    className={style["Video-main"]}
                    width="1060"
                    height="515"
                    src={video.URL}
                    allowFullScreen
                ></iframe>
            </div>
            <div className={style["interactions-Card"]}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 className={style["Titles"]} style={{ color: "rgb(255,141,0)" }}>{video.Titulo}</h1>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginRight: '30px' }}>
                            <img className={style['Icons']} src={Like} />
                            {/* <p>{video.Likes}</p> */}
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img className={style['Icons']} src={Dislike} />
                            {/* <p>{video.Dislikes}</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    {video.Descricao}
                </div>
                <hr />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className={style['Icon-comments']} src={CommentsWhite} />
                    <h1 className={style["Titles"]}> ● Comentários</h1>
                </div>
                <hr />
                <div className={style["coments-div"]}>
                    <Coments VideoId={video.Id}/>
                </div>
                <hr />
                <div>
                    <h1 className={style["Titles"]}>Próximo episódio</h1>
                </div>
                <div className={style["Next-body"]}>
                    <div className={style["Card-Next"]}>VIDEO</div>
                    <div>
                        <h1 className={style["Titles"]} style={{ color: "rgb(255,141,0)" }}>Title video</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro tenetur quae iure unde, quis expedita odio dolorum voluptatem facere, eum magnam quas blanditiis quos dolore tempore! Quae, ut at!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardVideo;
