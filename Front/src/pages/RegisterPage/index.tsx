import CardRegister from "../../components/cardRegister";
import style  from "./Register.module.css";

export default function RegisterPage() {
    return(
        <>
        <div className={style.body}>
            <div className={style.card_area}>
               <CardRegister/>
            </div>
        </div>
        </>
    );
}