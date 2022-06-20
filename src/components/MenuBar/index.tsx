import React from 'react';
import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon/>
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>

      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Felipe Krein</strong>
          <span>@fkrein1</span>
        </ProfileData>
        <ExitIcon />
      </BottomSide>
    </Container>
    )
}

export default MenuBar;