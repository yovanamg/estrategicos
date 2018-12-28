/*
 * MainLayout Messages
 *
 * This contains all the text for the MainLayout component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.MainLayout.header',
    defaultMessage: 'This is MainLayout container !',
  },
  menuOptions: {
    lineas: 'Solicitud de Lineas',
    banco: 'BanCoppel',
  },
  buttons: {
    cancel: 'Salir',
  },
  close: 'Iniciar sesión',
  modalTitle: 'Tu sesión ha expirado',
  relogin: 'Para volver a ingresar inicia sesión.',
});
