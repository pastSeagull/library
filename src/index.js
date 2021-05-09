import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Header from './pages/header'
import Footer from './pages/footer'
import './index.css'
import reportWebVitals from './reportWebVitals'
import routes from './router/index'
import RouteWithSubRoutes from './router/router'
import store from './store'
import { persistor } from './store'
// import App from './App'
// import Personal from './pages/personal'

/* const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        store.getState().user === 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
} */

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          {/* <Route path='/'>
            <App />
          </Route>
          <PrivateRoute path='/protected'>
            <Personal />
          </PrivateRoute> */}
        </Switch>
        <Footer />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
