import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AddWatch from './components/addwatch/AddWatch';
import ClockDetails from './components/clockdetails/ClockDetails';
import Login from './components/login/Login';
import Register from './components/login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/components/privateroute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Watches from './components/watches/Watches';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/watches">
          <Watches></Watches>
        </Route>
        <Route exact path="/addclock">
          <AddWatch></AddWatch>
        </Route>
        <Route  path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <PrivateRoute exact path="/clock/:id">
          <ClockDetails></ClockDetails>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
