import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon, 
  Followage,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Felipe Krein Rocha</h1>
        <h2>@fkrein1</h2>

        <p>
          Front-end Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 11 de Janeiro de 1989
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>232</strong>
          </span>
          <span>
            <strong>449 </strong> seguidores
          </span>  
        </Followage>

      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;