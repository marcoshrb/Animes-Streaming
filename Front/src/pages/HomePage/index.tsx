//styles
import style from "./HomePage.module.css"

//internal components
import CarouselMovie from "../../components/carouselMovie";
import NavBar from "../../components/navBar";
import NavBarComponent from "../../components/Navbar2";
import movieCard from "../../components/cardMovie";

export default function HomePage() {

    // const getMovies = (movies: any)=> {
    //     return (
    //         <div className={style.cardDeck}>
    //             movies.map(movie => <movieCard key={movie.id} movie={movie}/>)
    //         </div>
    //     )
    // }

    return (
        <>
            <div className={style.body_Home_page}>
                
                <NavBarComponent />

                <div className={style.carousel_area}>
                    <div className={style["div-carousel"]}>
                        <CarouselMovie />
                    </div>
                </div>
            </div>

        </>
    );
}