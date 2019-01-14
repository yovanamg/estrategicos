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
import * as Actions from './actions';
import styles from './styles';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    emailFocused: false,
    passwordFocused: false,
  }

  handleOnPressButton = () => {
    const { loginAction } = this.props;
    const { errorTextPass, username, password } = this.props.login;
    if (!errorTextPass) {
      loginAction(username, password);
    }
  }

  handleRequestCloseSnackBar = () => {
    const { setSnackbarState } = this.props;
    setSnackbarState(false, '');
  }

  handleChange = (e) => {
    const { saveUsername, savePassword } = this.props;
    if (e.target.name === 'username') {
      saveUsername(e.target.value);
    } else if (e.target.name === 'password') {
      savePassword(e.target.value);
    }
  };

  render() {
    const {
      errorTextCorreo,
      errorTextPass,
      snackbar,
      loading,
      username,
      password,
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
            name="username"
            style={this.state.emailFocused ? styles.textfield.correoFocused : styles.textfield.correo}
            errorText={errorTextCorreo}
            onChange={this.handleChange}
            errorStyle={styles.textfield.correo.errorStyle}
            inputStyle={styles.textfield.correo.inputStyle}
            underlineShow={false}
            onFocus={() => this.setState({ emailFocused: true })}
            onBlur={() => this.setState({ emailFocused: false })}
          />
        </div>
        <TextField
          floatingLabelText="Ingresa tu contraseña"
          floatingLabelStyle={this.state.passwordFocused ? styles.textfield.password.labelStyleFocused : styles.textfield.password.label}
          type="password"
          name="password"
          fullWidth
          onChange={this.handleChange}
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
        buttonDisabled={!username || password.length < 4}
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
  saveUsername: PropTypes.func,
  savePassword: PropTypes.func,
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
