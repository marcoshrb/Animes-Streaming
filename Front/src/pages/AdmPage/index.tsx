//styles
import style from "./AdmPage.module.css"

//internal components
import NavBarComponent from "../../components/Navbar2";

export default function AdmPage() {
    return (
        <>
            <div className={style.body_Home_page}>
                <NavBarComponent />
                <div className={style.welcome_container}>
                    <div className={style.title}>
                        <p>Bem-Vindo Administrador</p>
                    </div>
                </div>
                <div className={style.content_form}>
                    <button className={style.butn}>Lista de Usuários</button>
                    <button className={style.butn}>Catálogo de Mídia</button>
                </div>
            </div>
        </>
    );
}
