
//style
import style from "./profilePicture.module.css"

interface ProfilePictureProps {
  src: string;
}


  export default function profilePicture({src}: ProfilePictureProps){
    return (
      <>
      <div className={style.profile_pic_container}>
        <img src={src} alt="Foto de perfil" className={style.profile_pic} />
      </div>
      </>
    );
  }