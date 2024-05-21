//styles
import style from "./cardHome.module.css"

import { UserIdContext } from "../../context/UserId";
import { useContext } from "react";

export default function CardHome() {

    const { idUser, setIdUser} = useContext(UserIdContext);

    return (
        <>
            <div className={style["card-Home"]}>
                <div className={style["body-card"]}>
                    
                </div>
                <p className={style["Title"]}>
                    Titulo
                </p>
            </div>
        </>
    );
}