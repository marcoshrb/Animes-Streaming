
//react features
import React, { useState } from 'react';

//styles
import style from "./profilePicture.module.css"

interface ProfilePictureProps {
  src: string;
  onChange: (newSrc: string) => void; 
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, onChange }) => {
  const [selectedImage, setSelectedImage] = useState(src);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newSrc = reader.result as string;
        setSelectedImage(newSrc);
        onChange(newSrc); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('fileInput')?.click();
  };

  return (
    <>
      <div className={style.profile_pic_container} onClick={handleImageClick}>
        <img src={selectedImage} alt="Foto de perfil" className={style.profile_pic} />
      </div>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </>
  );
};

export default ProfilePicture;