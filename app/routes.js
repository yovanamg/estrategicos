// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import getRedirects from 'utils/redirects';
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  const {
    redirectFromLogin,
    // redirectToProspectExceptAdmin,
  } = getRedirects(store);

  return [
    {
      path: '/',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      // onEnter: redirectFromLogin,
    }, {
      path: '/',
      name: 'mainLayout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MainLayout/reducer'),
          import('containers/MainLayout'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('mainLayout', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/administracion-lineas',
          name: 'lineas',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Lineas/reducer'),
              import('containers/Lineas/sagas'),
              import('containers/Lineas'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('lineas', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          // onEnter: (nextState, replace) => {
          //   const user = JSON.parse(localStorage.getItem('user'));
          //   if (!user) replace('/');
          // },
        }, {
          path: '/home',
          name: 'home',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Home/reducer'),
              import('containers/Home/sagas'),
              import('containers/Home'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('home', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
