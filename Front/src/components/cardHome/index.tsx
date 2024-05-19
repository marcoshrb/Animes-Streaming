//styles
import style from "./cardHome.module.css"

export default function CardHome() {
    return (
        <>
            <div className={style["card-Home"]}>
                <div className={style["body-card"]}>
                    <p>image</p>
                </div>
                <p className={style["Title"]}>
                    Titulo
                </p>
            </div>
        </>
    );
}