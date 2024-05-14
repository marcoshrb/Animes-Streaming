import React from 'react';
import style from './profilePicture.index.css'

interface ProfilePicProps {
    src: string; 
  }

  const ProfilePic: React.FC<ProfilePicProps> = ({ src }) => {
    return (
      <div className="profile-pic-container">
        <img src={src} alt="Foto de perfil" className="profile_pic" />
      </div>
    );
  };
  
  export default ProfilePic;