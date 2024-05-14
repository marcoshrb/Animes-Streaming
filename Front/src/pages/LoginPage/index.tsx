//internal components
import CardLogin from "../../components/cardLogin";

//styles
import style  from "./Login.module.css";

export default function LoginPage() {
    return(
        <>
        <div className={style["body-Login"]}>
            <CardLogin/>
        </div>
        </>
    );
}