import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import News from './pages/news';
import Profile from './pages/profile';
import { Provider } from 'react-redux';
import WrappHeader from './components/WrappHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('isLogged') == 'true'
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


const App = (props) => {

  const store = props.store;
  return (
    <div>
      <Provider store={store}>
        <WrappHeader />
      </Provider>

      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/home"
        component={Home}
      />
      <Route
        exact
        path="/login"
        component={Login}
      />
      <PrivateRouteAdmin
        exact
        path="/profile"
        component={Profile}
      />
      <Route
        exact
        path="/news"
        component={News}
      />
    </div>
  )
}
export default App;
