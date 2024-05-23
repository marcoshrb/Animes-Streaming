//react features 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//styles
import style from "./HomePage.module.css"

//internal components
import CarouselMovie from "../../components/carouselMovie";
import NavBarComponent from "../../components/Navbar2";
import movieCard from "../../components/cardMovie";
import CardHome from "../../components/cardHome";

export default function HomePage() {

    return (
        <>
            <div className={style.body_Home_page}>

                <NavBarComponent />

                <div className={style.carousel_area}>
                    <div className={style["div-carousel"]}>
                        <CarouselMovie />
                    </div>
                </div>
                <div className={style["body-cards-home"]}>
                    <h1 className={style["Title-cards"]}>Populares</h1>
                    <div className={style["Cards"]}>
                        <CardHome />
                    </div>
                </div>
                <div className={style["body-cards-home"]}>
                    <h1 className={style["Title-cards"]}>Filmes</h1>
                    <div className={style["Cards"]}>
                        <CardHome />
                    </div>
                </div>
            </div>

        </>
    );
}