//internal components
import NavBarComponent from "../../components/Navbar2";
import CardVideo from "../../components/cardVideo";

//styles
import style  from "./Video.module.css";

export default function VideoPage() {
    return(
        <>
        <div className={style["body-Login"]}>
            <NavBarComponent/>
            <CardVideo/>
        </div>
        </>
    );
}