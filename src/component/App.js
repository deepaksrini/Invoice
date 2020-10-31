import React from 'react';
import './App.css';
import VisibilityTodo from './../features/todos/VisibilityTodo'
import { hot } from 'react-hot-loader';
import AddTodoList from '../features/todos/AddTodo';
import Footer from '../features/filters/Footer';
import Dashboard from '../features/Dashboard/Dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../features/Login/Login';
import SignUp from '../features/Login/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/invoice" component={Dashboard} />
          <Redirect from="/" to="/invoice" />
        </Switch>
      </BrowserRouter>

      {/* <AddTodoList />
      <VisibilityTodo />
      <Footer /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

// let app = App;
// if (module.hot && process.env.NODE_ENV !== 'development') {
//   app = hot(module)(App);
// }


export default App
