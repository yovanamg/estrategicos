import superagent from 'superagent';
import config from '../../config';

export const newLine = (body) =>
  superagent
    .post(`${config.api.url}/lineas_telefonicas`)
    .send(body)
    .then((data) => data.body);

export const getLineas = () =>
  superagent
    .get(`${config.api.url}/lineas_telefonicas`)
    .then((data) => data.body);

export const getEmployeeByNumemp = (numemp) =>
  superagent
    .get(`${config.api.url}/ldm_empleados_vigentes/${numemp}`)
    .then((data) => data.body);

export const getObjectManager = (numemp) =>
  superagent
    .get(`${config.api.url}/ldm_planta/${numemp}`)
    .then((data) => data.body);

export const getIdCoordinators = (idPlanta) =>
  superagent
    .get(`${config.api.url}/ldm_planta/${idPlanta}`)
    .then((data) => data.body);
