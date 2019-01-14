/*
 * Lineas Messages
 *
 * This contains all the text for the Lineas component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Lineas.header',
    defaultMessage: 'This is Lineas container !',
  },
  selectedItem: 'Líneas Telefónicas',
  subHeaderTitle: 'Líneas Telefónicas',
  subHeaderButtonLabel: 'Nueva solicitud',
  nav: {
    administrator: 'Administrador',
  },
  table: {
    numemp: 'Num. empleado',
    name: 'Nombre',
    date: 'Fecha solicitud',
    status: 'Estatus',
    lada: 'Lada',
  },
  dialogButtons: {
    yesButtonLabel: 'Enviar solicitud',
    noButtonLabel: 'Cancelar',
  },
  placeHolders: {
    yes: 'Puesto tiene autorizado línea telefónica.',
    no: 'Puesto NO tiene autorizado línea telefónica.',
    decision: 'He leído y acepto los términos que marca la decisión 16.9 - Asignación de celulares',
  },
  solicitudDialogTitle: 'Nueva solicitud de línea telefónica',
  detailsTitle: 'Detalle de solicitud',
  characteristics: 'Caracteristicas',
  information: 'Información de línea telefónica asignada:',
  firstPart: 'Datos de la persona que solicita',
  secondPart: 'Datos del colaborador al que se le asignará',
  empty: 'No cuenta con solicitud de lineas actualmente.',
  name: 'Nombre',
  numberEmployee: 'Número de empleado',
  job: 'Puesto',
  center: 'Centro',
  date: 'Fecha de solicitud',
  lada: 'Lada',
  options: 'Seleccione una opción',
  description: 'Justificación de la necesidad del uso del teléfono celular (actividades a realizar).',
  success: 'Solicitud enviada con exito.',
  error: 'Error al enviar solicitud.',
  employeeError: 'Error al cargar información de usuario solictante.',
  equipoError: 'Error al cargar información del equipo',
  marca: 'Marca',
  model: 'Modelo',
  numberCel: 'Número celular',
  imei: 'IMEI',
  responive: 'Documentación',
  question: '¿Responsiva firmada?',
});
