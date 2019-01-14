/**
*
* TopBar
*
*/

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import ArrowDropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import homeLogo from 'components/Icons/bancoppel-logo.png';
import { mapRolesToPretty } from 'utils/usersRoles';
import messages from './messages';
import styles from './styles';
import { TopBarSection,
  MenuLeftSection,
  MenuRightSection,
  ProfileSection,
  DataSection,
  UserName,
  UserRole,
  AvatarSection,
  ArrowSection,
  SpacingDiv,
  IconSectionSelected,
  IconSection,
  MenuOptionSelected,
  MenuOption,
  MenuOptionsSection,
  MenuOptions,
  ImgLogo,
} from './styledComponents';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  whiteColor = '#fff';
  searcherContentColor = '#a6e5c1';
  userImageUrl = 'https://icon-icons.com/icons2/11/PNG/256/child_person_people_guy_1721.png';
  user = JSON.parse(localStorage.getItem('user'));
  userName = this.user ? `${this.user.username} ` : '';
  userRole = this.user ? mapRolesToPretty(this.user.rol) : '';
  handleLogout = () => {
    localStorage.removeItem('user');
    browserHistory.replace('/');
  }

  render() {
    const { selectedItem } = this.props;
    const Banco = selectedItem === messages.menuOptions.banco ? IconSectionSelected : IconSection;
    const Option = selectedItem === messages.menuOptions.lineas ? MenuOptionSelected : MenuOption;
    return (
      <div>
        <TopBarSection>
          <MenuLeftSection>
            <Banco onClick={() => browserHistory.push('/home')}>
              <ImgLogo src={homeLogo} />
            </Banco>
            <MenuOptions>
              <MenuOptionsSection>
                <Option
                  onClick={() => browserHistory.push('/administracion-lineas')}
                >
                  <a>{messages.menuOptions.lineas}</a>
                </Option>
              </MenuOptionsSection>
            </MenuOptions>
          </MenuLeftSection>
          <MenuRightSection>
            <ProfileSection>
              <DataSection>
                <UserName>
                  {this.userName}
                </UserName>
                <UserRole>
                  {this.userRole}
                </UserRole>
              </DataSection>
              <AvatarSection>
                <Avatar
                  style={styles.image}
                  src={this.userImageUrl}
                />
              </AvatarSection>
              <ArrowSection>
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <ArrowDropDownIcon
                        color={this.whiteColor}
                      />
                    </IconButton>}
                  targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                  <MenuItem
                    value="1"
                    primaryText="Cerrar sesión"
                    onClick={this.handleLogout}
                  />
                </IconMenu>
              </ArrowSection>
            </ProfileSection>
          </MenuRightSection>
        </TopBarSection>
        <SpacingDiv />
      </div>
    );
  }
}

TopBar.propTypes = {
  selectedItem: PropTypes.string,
};

export default TopBar;
