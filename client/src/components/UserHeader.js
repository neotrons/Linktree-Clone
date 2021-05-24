import React from 'react';
import { enviroment } from '../config';

const UserHeader = ({ username, avatar }) => {
  avatar = `${enviroment.uploadUrl}${avatar}`;

  return (
    <header className="userContainer">
      <img className="avatarStyle" src={avatar} alt="user avatar"/>
      <h2>{`@${username}`}</h2>
    </header>
  )
}

export default UserHeader
