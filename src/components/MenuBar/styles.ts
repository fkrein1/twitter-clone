import styled, { css } from 'styled-components';
import {
  Home, 
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  Twitter,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto; 
  }
`;
export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 3px;
  outline: 0;
  cursor: pointer;
  border-radius: 25px;

  > span {
    display: none;

    @media (min-width: 1280px) {
      display: inline;
      margin-left: 15px;
      font-weight: bold;
      font-size: 19px;
      padding-right: 15px;
    }
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  &:hover {
    background: var(--twitter-dark-hover)
  }

`;

const iconsCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`

export const Logo = styled(Twitter)`
  ${iconsCSS};
  margin-bottom: 20px;
  > path {
    fill: var(--twitter);
  }
`;
export const HomeIcon = styled(Home)`
  ${iconsCSS};
`;
export const BellIcon = styled(Notifications)`
  ${iconsCSS};
`;
export const EmailIcon = styled(Email)`
  ${iconsCSS};
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsCSS};
`;
export const ProfileIcon = styled(Person)`
  ${iconsCSS};
`;

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

`;
export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
`;
export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      font-weight: normal;
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer;
    margin-left: 30px;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }  
`;