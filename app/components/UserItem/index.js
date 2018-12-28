/**
*
* UserItem
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getCelphone } from 'utils/regex';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorIcon from 'material-ui/svg-icons/navigation/more-horiz';
import Moment from 'moment/min/moment-with-locales';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { styles } from './styles';
import {
  LevelIcon,
  Cropper,
} from './styledComponents';
import {
  IconButtonStyles,
  IconMenuStyles,
} from './materialInlineStyles';
import messages from './messages';

class UserItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  }

  render() {
    const {
      linea,
      editClient,
      storeUser,
      addProject,
      detailClient,
    } = this.props;
    return (
      <TableRow style={styles.RowHeight}>
        <TableRowColumn style={styles.styleNum}>{linea.numemp_solicito}</TableRowColumn>
        <TableRowColumn style={styles.styleName}>{linea.nombre.concat(' ').concat(linea.appat).concat(' ').concat(linea.apmat)}</TableRowColumn>
        <TableRowColumn style={styles.styleDate}>{Moment(linea.fecha_solicitud).format('MM/DD/YYYY')}</TableRowColumn>
        <TableRowColumn style={styles.styleStatus}>{linea.estatus}</TableRowColumn>
        <TableRowColumn style={styles.styleLada}>{linea.lada}</TableRowColumn>
        <TableRowColumn style={styles.ButtonCellStyle}>
          <IconMenu
            style={IconMenuStyles}
            iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem
              primaryText={messages.buttons.add}
              onClick={addProject}
            />
            <MenuItem
              primaryText={messages.buttons.detail}
              onClick={detailClient}
            />
            <MenuItem
              primaryText={messages.buttons.edit}
              onClick={editClient}
            />
            <MenuItem
              primaryText={messages.buttons.store}
              onClick={storeUser}
            />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    );
  }
}

UserItem.propTypes = {
  linea: PropTypes.object,
  addProject: PropTypes.func,
  editClient: PropTypes.func,
  detailClient: PropTypes.func,
  storeUser: PropTypes.func,
};

export default UserItem;
