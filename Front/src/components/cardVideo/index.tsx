import style from "./CardVideo.module.css";

function CardVideo() {

    return (
        <>
            <div className={style["body_Card"]}>
                <h1 style={{color: 'white'}}>-----   VIDEO AQUI  -------</h1>
            </div>
            <div className={style["interactions-Card"]}>
                <p style={{color: 'white'}}>Like</p>
                <p style={{color: 'white'}}>Dislike</p>
            </div>
        </>
    )
}

export default CardVideo
