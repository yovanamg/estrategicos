/**
*
* UserItem
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      detailsLinea,
    } = this.props;
    return (
      <TableRow style={styles.RowHeight}>
        <TableRowColumn style={styles.styleNum}>{linea.numemp_solicito}</TableRowColumn>
        <TableRowColumn style={styles.styleName}>{linea.nombre.concat(' ').concat(linea.appat).concat(' ').concat(linea.apmat)}</TableRowColumn>
        <TableRowColumn style={styles.styleDate}>{Moment(linea.fecha_solicitud).format('MM/DD/YYYY')}</TableRowColumn>
        { linea.estatus.trim() === 'Pendiente' ? <TableRowColumn style={styles.styleStatusYellow}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'En espera de equipo' ? <TableRowColumn style={styles.styleStatusOrange}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'En espera de firma' ? <TableRowColumn style={styles.styleStatusOrange2}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'En proceso' ? <TableRowColumn style={styles.styleStatusGreen1}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'Activo' ? <TableRowColumn style={styles.styleStatusGreen}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'Rechazada' ? <TableRowColumn style={styles.styleStatusRed}>{linea.estatus}</TableRowColumn> : '' }
        { linea.estatus.trim() === 'Suspendida/Baja' ? <TableRowColumn style={styles.styleStatusRed1}>{linea.estatus}</TableRowColumn> : '' }
        <TableRowColumn style={styles.styleLada}>{linea.lada}</TableRowColumn>
        <TableRowColumn style={styles.ButtonCellStyle}>
          {
            linea.estatus.trim() !== 'Pendiente' && linea.estatus.trim() !== 'En espera de equipo'
            ? (<IconMenu
              style={IconMenuStyles}
              iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem
                primaryText={messages.buttons.details}
                onClick={detailsLinea}
              />
            </IconMenu>)
            : ''
          }
        </TableRowColumn>
      </TableRow>
    );
  }
}

UserItem.propTypes = {
  linea: PropTypes.object,
  detailsLinea: PropTypes.func,
};

export default UserItem;
