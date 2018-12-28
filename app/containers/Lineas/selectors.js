import { createSelector } from 'reselect';

/**
 * Direct selector to the lineas state domain
 */
const selectLineasDomain = () => (state) => state.get('lineas');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Lineas
 */

const makeSelectLineas = () => createSelector(
  selectLineasDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLineas;
export {
  selectLineasDomain,
};
