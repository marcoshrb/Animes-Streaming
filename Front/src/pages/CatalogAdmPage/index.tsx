//styles
import style from "./CatalogAdmPage.module.css"

//internal components
import NavBarComponent from "../../components/Navbar2";

export default function CatalogAdmPage() {
    return (
        <>
            <div className={style.body_Home_page}>
                <NavBarComponent/>
                <div className={style.search_area}>
                    
                </div>
            </div>
        </>
    );
}