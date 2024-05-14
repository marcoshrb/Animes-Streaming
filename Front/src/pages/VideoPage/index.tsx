//internal components
import CardVideo from "../../components/cardVideo";
import NavBar from "../../components/navBar";

//styles
import style  from "./Video.module.css";

export default function VideoPage() {
    return(
        <>
        <div className={style["body-Login"]}>
            <NavBar/>
            <CardVideo/>
        </div>
        </>
    );
}