import styled from 'styled-components';

export const TopBarSection = styled.div`
  width: 100%;
  min-height: 64px;
  background-color: #bab9b9;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const MenuLeftSection = styled.div`
  width: 46%;
  padding: 0 24px 0 28px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: left;
  float: left;
`;

export const MenuRightSection = styled.div`
  width: 47vw;
  height: 64px;
  float: right;
`;

export const ProfileSection = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  padding: 12px 0%;
`;

export const DataSection = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  padding-top: 1px;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
`;

export const UserRole = styled.div`
  opacity: 0.7;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
`;

export const AvatarSection = styled.div`
  width: 10%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowSection = styled.div`
  width: 0%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SpacingDiv = styled.div`
  height: 64px;
  width: 100%;
`;

export const IconSection = styled.div`
  cursor: pointer;
`;

export const IconSectionSelected = styled.div`
  width: 50%%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuOption = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;

export const MenuOptionSelected = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  height: 100%;
  border-bottom: 6px solid white;
  display: flex;
  align-items: center;
  padding-top: 7px;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;

export const MenuOptionsSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
`;

export const MenuOptions = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const ImgLogo = styled.img`
  height: 50px;
`;
