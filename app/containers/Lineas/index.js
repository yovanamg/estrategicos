/*
 *
 * Lineas
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { nth } from 'lodash';
import FullPageLoader from 'components/FullPageLoader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import DropDownMenu from 'material-ui/DropDownMenu';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Subheader from 'components/Subheader';
import UserItem from 'components/UserItem';
import Empty from 'components/Icons/empty.svg';
import Moment from 'moment/min/moment-with-locales';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import { createStructuredSelector } from 'reselect';
import {
  flatButtonStyles,
  raisedButtonStyles,
  dialogStyles,
  closeIconStyle,
} from './materialInlineStyles';
import makeSelectLineas from './selectors';
import messages from './messages';
import {
  MainDivStyled,
  LoaderContainer,
  StyledFlatButton,
  DialogTitleContainer,
  DialogTitle,
  StyledClosedIcon,
  FormContainer,
  LineasContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
  TitleContainer,
  Number,
  FormContainerLeftSide,
  FormContainerRightSide,
  Title,
  TwoItems,
} from './styledComponents';
import {
  openModal,
  saveLada,
  saveCollaborator,
  saveDescription,
  saveAutorization,
  saveDecision,
  getLineaRequest,
  setSnackbarState,
  getEmployeeRequest,
} from './actions';
import { styles } from './styles';
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
export class Lineas extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedCollaborator: 'Selecciona un colaborador',
    selectedCollaboratorIndex: -1,
    decision: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const numemp = '92157629';
    console.log('------------------------------------');
    console.log('heeeey');
    console.log('------------------------------------');
    dispatch(getEmployeeRequest(numemp));
  }

  getCollaborators = () => {
    const { Lineas: { collaborators } } = this.props;
    const Collaborators =
      collaborators.map((item, index) => (
        <MenuItem
          key={index + 1}
          value={item.nombre}
          primaryText={item.nombre}
          onClick={this.handleSaveCollaborator(item)}
        />
      ));
    return Collaborators;
  }

  setOptionAction = (e) => {
    const { dispatch } = this.props;
    const { decision } = this.state;
    switch (e.target.name) {
      case 'autorization':
        dispatch(saveAutorization(e.target.value));
        break;
      case 'decision':
        dispatch(saveDecision(!decision));
        this.setState({ decision: !decision });
        break;
      default:
        break;
    }
  }

  handleCreateLinea = () => {
    const { dispatch,
      Lineas: {
        solicitante,
        collaborator,
        lada,
        description,
        autorization,
        decision,
      },
    } = this.props;
    const body = {
      numemp_solicito: solicitante.numemp,
      fecha_solicitud: Moment().format('YYYY-MM-DD'),
      fecha_cambio: Moment().format('YYYY-MM-DD'),
      numemp_linea: collaborator.number,
      lada,
      autorizacion: autorization,
      motivo_solicitud: description,
      motivo_cambio: '',
      motivo_rechazo: '',
      motivo_baja: '',
      decision,
      estatus: 'Pendiente',
      responsiva: 'No',
      equipo_entregado: '',
    };
    dispatch(getLineaRequest(body));
  }

  handleCancel = () => {
    const { dispatch, Lineas: { showModal } } = this.props;
    const collaborator = { nombre: '', number: '', job: '', center: '' };
    this.setState({ selectedCollaborator: 'Selecciona un colaborador' });
    dispatch(saveCollaborator(collaborator));
    dispatch(saveLada(''));
    dispatch(saveAutorization(''));
    dispatch(saveDecision(false));
    dispatch(saveDescription(''));
    dispatch(openModal(!showModal));
  }

  handleOpenModal = () => {
    const { dispatch, Lineas: { showModal } } = this.props;
    const collaborator = { nombre: '', number: '', job: '', center: '' };
    dispatch(saveCollaborator(collaborator));
    dispatch(saveLada(''));
    dispatch(saveAutorization(''));
    dispatch(saveDecision(false));
    dispatch(saveDescription(''));
    dispatch(openModal(!showModal));
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  }


  handleOnChange = (e) => {
    const { dispatch } = this.props;
    const numberCode = e.target.value;
    if (e.target.name === 'lada') {
      dispatch(saveLada(numberCode.replace(/[^0-9.]+/g, '')));
    } else {
      dispatch(saveDescription(numberCode.replace(/[^Aa-zA-Záéíóúü´ñ0-9 ]/gi, '')));
    }
  };

  handleChangeDropdownOption = (event, index, value) => {
    this.setState({ selectedCollaborator: value, selectedCollaboratorIndex: index });
  }

  handleSaveCollaborator = (item) => () => {
    const { dispatch } = this.props;
    dispatch(saveCollaborator(item));
  }

  filter = () => {
    const { lineas } = this.props.Lineas;
    const filteredItems = [];
    lineas.forEach((linea) => {
      filteredItems.push(
        <UserItem
          key={linea.id}
          linea={linea}
          addProject={() => this.handleAddProject(linea.id)}
          editClient={() => this.handleClickUpdate(linea)}
          detailClient={() => this.handleRedirectDetail(linea)}
          storeUser={() => this.handleOpenStoreDialog(linea)}
        />
      );
    });
    return filteredItems;
  }
  render() {
    const {
      Lineas: {
        lineas, loading, showModal, snackbar, loadingLineas, subLoading,
        solicitante, collaborator, loadingCollaborator, collaborators,
        lada, autorization, description, decision, arrayCoordinators,
      },
    } = this.props;
    console.log('arrayCoordinators2', arrayCoordinators);
    const { selectedCollaborator } = this.state;
    const f = new Date();
    const nombreDia = nth(diasSemana, f.getDay());
    const numeroDia = f.getDate();
    const mes = nth(meses, f.getMonth());
    const anio = f.getFullYear();
    const solicitudActions = (
      [
        <StyledFlatButton
          label={messages.dialogButtons.noButtonLabel}
          labelStyle={flatButtonStyles.labelStyle}
          style={flatButtonStyles.style}
          onClick={this.handleCancel}
        />,
        <RaisedButton
          label={messages.dialogButtons.yesButtonLabel}
          labelStyle={raisedButtonStyles.labelStyle}
          labelColor={raisedButtonStyles.labelColor}
          backgroundColor={raisedButtonStyles.backgroundColor}
          style={raisedButtonStyles.buttonStyle}
          buttonStyle={raisedButtonStyles.buttonStyle}
          disabled={!solicitante.numemp || !collaborator.number
            || !lada || !autorization || !description || !decision}
          onClick={this.handleCreateLinea}
        />,
      ]
    );
    const addSolicitudDialog = (
      <Dialog
        modal
        actions={solicitudActions}
        open={showModal}
        autoScrollBodyContent
        contentStyle={dialogStyles.smallContentStyle}
      >
        <DialogTitleContainer>
          <DialogTitle>{messages.solicitudDialogTitle}</DialogTitle>
          <StyledClosedIcon onClick={this.handleCancel} style={closeIconStyle} />
        </DialogTitleContainer>
        <TitleContainer>
          <Number>1</Number>
          <Title>{messages.firstPart}</Title>
        </TitleContainer>
        <FormContainer>{messages.name}</FormContainer>
        <TextField
          underlineShow={false}
          style={styles.Input}
          disabled
          inputStyle={styles.textField}
          value={solicitante.nombre.trim().concat(' ')
          .concat(solicitante.appat.trim()).concat(' ')
          .concat(solicitante.apmat.trim())}
        />
        <TwoItems>
          <FormContainerLeftSide>{messages.numberEmployee}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.job}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            style={styles.InputLeftSide}
            disabled
            inputStyle={styles.textField}
            value={solicitante.numemp}
          />
          <TextField
            underlineShow={false}
            style={styles.InputRightSide}
            disabled
            inputStyle={styles.textField}
            value={solicitante.nombre_puesto}
          />
        </TwoItems>
        <TwoItems>
          <FormContainerLeftSide>{messages.center}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.date}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            style={styles.InputLeftSide}
            disabled
            inputStyle={styles.textField}
            value={solicitante.centro}
          />
          <TextField
            underlineShow={false}
            style={styles.InputRightSide}
            disabled
            inputStyle={styles.textField}
            value={nombreDia.concat(' ')
            .concat(numeroDia).concat(' de ')
            .concat(mes).concat(' ').concat(anio)}
          />
        </TwoItems>
        <TitleContainer>
          <Number>2</Number>
          <Title>{messages.secondPart}</Title>
        </TitleContainer>
        <FormContainer>{messages.name}</FormContainer>
        {
          !loadingCollaborator && collaborators &&
          <DropDownMenu
            underlineStyle={styles.dropDownMenuUnderline}
            value={selectedCollaborator}
            onChange={this.handleChangeDropdownOption}
            style={styles.dropDownMenuStyle}
            iconStyle={styles.dropDownMenuIcon}
            labelStyle={styles.dropDownMenuLabel}
            selectedMenuItemStyle={styles.selected}
            autoWidth={false}
          >
            <MenuItem
              key={0}
              value={'Selecciona un colaborador'}
              primaryText={'Selecciona un colaborador'}
              disabled
            />
            {
              this.getCollaborators()
            }
          </DropDownMenu>
          }
        <TwoItems>
          <FormContainerLeftSide>{messages.numberEmployee}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.job}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            style={styles.InputLeftSide}
            disabled
            inputStyle={styles.textField}
            value={collaborator.number}
          />
          <TextField
            underlineShow={false}
            style={styles.InputRightSide}
            disabled
            inputStyle={styles.textField}
            value={collaborator.job}
          />
        </TwoItems>
        <TwoItems>
          <FormContainerLeftSide>{messages.center}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.lada}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            style={styles.InputLeftSide}
            disabled
            inputStyle={styles.textField}
            value={collaborator.center}
          />
          <TextField
            underlineShow={false}
            style={styles.InputRightSide}
            inputStyle={styles.textField}
            value={lada}
            onChange={this.handleOnChange}
            onKeyUp={this.handleOnChange}
            maxLength={3}
            type="text"
            name="lada"
            required
          />
        </TwoItems>
        <FormContainer>{messages.options}</FormContainer>
        <RadioButtonGroup
          name={'autorization'}
          defaultSelected={autorization}
          style={styles.groupRadioButton}
        >
          <RadioButton
            value={'Si'}
            label={messages.placeHolders.yes}
            labelStyle={styles.grayStyle}
            style={styles.radioButton}
            onClick={this.setOptionAction}
          />
          <RadioButton
            value={'No'}
            label={messages.placeHolders.no}
            labelStyle={styles.grayStyle}
            style={styles.radioButton}
            onClick={this.setOptionAction}
          />
        </RadioButtonGroup>
        <FormContainer>{messages.description}</FormContainer>
        <TextField
          multiLine
          name="description"
          value={description}
          style={styles.InputDescription}
          onChange={this.handleOnChange}
          onKeyUp={this.handleOnChange}
          required
          rowsMax={4}
          hintText="Escribe aquí..."
        />
        <Checkbox
          name="decision"
          label={messages.placeHolders.decision}
          checked={decision}
          onCheck={this.setOptionAction}
          style={styles.groupRadioButton}
        />
      </Dialog>
    );
    return (
      <div>
        <Helmet
          title="Solicitud de Líneas"
          meta={[
            { name: 'description', content: 'Lineas' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenModal}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
        {!loadingLineas ? (
          <LineasContainer>
            {
              lineas.length > 0 ?
                <MainDivStyled>
                  { !subLoading ?
                    <Table>
                      <TableHeader
                        enableSelectAll={false}
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                      >
                        <TableRow style={styles.TableHeaderHeight}>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabOne}>
                            {messages.table.numemp}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabTwo}>
                            {messages.table.name}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.date}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.status}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFive}>
                            {messages.table.lada}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledButtons} />
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        {this.filter()}
                      </TableBody>
                    </Table> : <CircularProgress style={{ textAlign: 'center', margin: '16px auto', display: 'block' }} size={80} thickness={5} />
                  }
                </MainDivStyled>
              : <ContainerEmpty>
                <MessageEmpty>{messages.empty}</MessageEmpty>
                <ImgEmpty src={Empty} />
              </ContainerEmpty>
            }
            {addSolicitudDialog}
            <Snackbar
              open={snackbar.open}
              message={snackbar.text}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestCloseSnackBar}
            />
          </LineasContainer>)
        :
          <LoaderContainer>
            <FullPageLoader />
          </LoaderContainer>
        }
        {
          loading && <FullPageLoader />
        }
      </div>
    );
  }
}

Lineas.propTypes = {
  Lineas: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Lineas: makeSelectLineas(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lineas);
