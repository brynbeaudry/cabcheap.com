// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import WelcomeRoute from './Welcome'
import CounterRoute from './Counter'
import RegisterRoute from './Register'
import LoginRoute from './Login'
import MapRoute from './Map'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const state = { ...store.getState() }
    if (state.auth === undefined) {
      replace('/')
    } else {
      const { auth: { user } } = state
      if (!user) {
        replace('/')
      }
    }
    cb()
  }

  const requirePublic = (nextState, replace, cb) => {
    const state = { ...store.getState() }
    if (state.auth !== undefined) {
      const { auth: { user } } = state
      if (user) {
        replace('map')
      }
    }
    cb()
  }

  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: WelcomeRoute,
    childRoutes: [
      {
        onEnter: requirePublic,
        childRoutes: [
          CounterRoute(store),
          RegisterRoute(store),
          LoginRoute(store),
        ]
      },
      {
        onEnter: requireLogin,
        childRoutes: [
          MapRoute(store),
        ]
      },
    ]
  })
}
/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
