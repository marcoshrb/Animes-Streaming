//bootstrap components
import Carousel from 'react-bootstrap/Carousel';

//styles
import style from "./carouselMovie.module.css"
import playIcon from "./assets/botao-play.png";


function CarouselMovie() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1715472000&semt=ais_user'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3>Title</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1715472000&semt=ais_user'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3>Title</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={10000}>
        <img className={style.img_c}  width={"920"} height={"400px"} src='https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1715472000&semt=ais_user'/>
        <Carousel.Caption>
          <div className={style["Titles-carosel"]}>
            <div>
              <h3>Title</h3>
            </div>
            <button className={style["button-assistir-agora"]}>ASSISTIR AGORA <img src={playIcon} className={style["play-icon"]}></img></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMovie;