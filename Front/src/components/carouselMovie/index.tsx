//bootstrap components
import Carousel from 'react-bootstrap/Carousel';

//styles
import style from "./carouselMovie.module.css"
import playIcon from "./assets/botao-play.png";


function CarouselMovie() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='../../../src/assets/img/atck.jpg'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3 className={style.title}>Attack on Titan</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='../../../src/assets/img/jojo.jpg'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3 className={style.title}>Jojo's Bizarre Adventure</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='../../../src/assets/img/jjk.png'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3 className={style.title}>Jujutsu Kaisen</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMovie;