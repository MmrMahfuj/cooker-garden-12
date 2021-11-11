import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import OrderProceed from './components/OrderProceed/OrderProceed';
import AuthProvider from './contexts/AuthProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/explore">
              <Header></Header>
              <Explore></Explore>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/dashboard">
              <Header></Header>
              <Dashboard></Dashboard>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/orderProceed/:id">
              <Header></Header>
              <OrderProceed></OrderProceed>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
