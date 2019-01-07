/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FullPageLoader from 'components/FullPageLoader';
import SessionForm from 'components/SessionForm';
// import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import { TextField } from 'material-ui';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import makeSelectLogin from './selectors';
import { EjemploCorreo } from './styledComponents';
import * as Actions from './actions';
import styles from './styles';
import config from '../../config';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    emailFocused: false,
    passwordFocused: false,
  }

  validateNumeric(expression) {
    const regEx = /^[0-9\s]+$/i;
    return regEx.test(expression);
  }

  validateLength(value) {
    return value.length > 4;
  }

  handleOnPressButton = () => {
    const { loginAction } = this.props;
    const { username, password, errorTextPass } = this.props.login;
    if (!errorTextPass) {
      console.log('------------------------------------');
      console.log('entro2', username, password);
      console.log('------------------------------------');
      loginAction(username, password);
    }
  }

  handleRequestCloseSnackBar = () => {
    const { setSnackbarState } = this.props;
    setSnackbarState(false, '');
  }

  handleKeyPress = (event) => {
    const { loading } = this.props.login;
    console.log('------------------------------------');
    console.log('event', event.target.value);
    console.log('------------------------------------');
    const { value } = event.target;
    if (value.length >= 4 && value.length <= 30 && !loading) {
      this.handleOnPressButton();
    }
  };

  render() {
    const {
      errorTextCorreo,
      errorTextPass,
      snackbar,
      textoCorreo,
      textoPass,
      loading,
    } = this.props.login;

    const contenido = (
      <div>
        <div>
          <TextField
            floatingLabelText="Nombre usuario"
            floatingLabelStyle={
              this.state.emailFocused ?
              styles.textfield.correo.labelStyleFocused :
              styles.textfield.correo.labelStyle
            }
            style={this.state.emailFocused ? styles.textfield.correoFocused : styles.textfield.correo}
            errorText={errorTextCorreo}
            onChange={this.updateCorreo}
            errorStyle={styles.textfield.correo.errorStyle}
            inputStyle={styles.textfield.correo.inputStyle}
            underlineShow={false}
            onFocus={() => this.setState({ emailFocused: true })}
            onBlur={() => this.setState({ emailFocused: false })}
          />
          <EjemploCorreo className={'desc'}>{config.emailDomain}</EjemploCorreo>
        </div>
        <TextField
          floatingLabelText="Ingresa tu contraseña"
          floatingLabelStyle={this.state.passwordFocused ? styles.textfield.password.labelStyleFocused : styles.textfield.password.label}
          type="password"
          fullWidth
          onChange={this.handleKeyPress}
          style={styles.textfield.password}
          errorText={errorTextPass}
          errorStyle={styles.textfield.password.errorStyle}
          underlineShow={false}
          maxLength={30}
          inputStyle={this.state.passwordFocused ? styles.textfield.password.inputStyleFocused : styles.textfield.password.inputStyle}
          onFocus={() => this.setState({ passwordFocused: true })}
          onBlur={() => this.setState({ passwordFocused: false })}
        />
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
        {loading && <FullPageLoader />}
      </div>
    );

    return (
      <SessionForm
        titulo="Inicia sesión"
        description="Administración de Recursos Estratégicos"
        contenido={contenido}
        labelButton="Ingresar"
        onPressButton={this.handleOnPressButton}
        buttonDisabled={!textoCorreo || textoPass.length < 8}
        paso={1}
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.object.isRequired,
  errorTextPass: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  loginAction: PropTypes.func,
  setSnackbarState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(Actions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
