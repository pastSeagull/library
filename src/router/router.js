import { Route, Redirect } from 'react-router-dom'
import store from '../store'

function RouteWithSubRoutes(route) {
  /* if (store.getState().user.length !== 0) {
    console.log(store.getState().user.length)
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
  } else {
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
  } */
  return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
}

export default RouteWithSubRoutes
