import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddProduct from './components/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageAllProducts from './components/ManageAllProducts/ManageAllProducts';
import AuthProvider from './contexts/AuthProvider';

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
            <Route path="/addProduct">
              <Header></Header>
              <AddProduct></AddProduct>
              <Footer></Footer>
            </Route>
            <Route path="/manageAllProducts">
              <Header></Header>
              <ManageAllProducts></ManageAllProducts>
              <Footer></Footer>
            </Route>
            <Route path="/makeAdmin">
              <Header></Header>
              <MakeAdmin></MakeAdmin>
              <Footer></Footer>
            </Route>
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
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
