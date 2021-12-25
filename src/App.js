import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/tobBar/TopBar";

import './app.css';
import Home from "./pages/homePage/Home";
import UserList from "./pages/Userlist/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/Newuser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/users'>
            <UserList />
          </Route>

          <Route path='/user/:userId'>
            <User />
          </Route>

          <Route path='/newUser'>
            <Newuser />
          </Route>

          <Route path='/products'>
            <ProductList />
          </Route>

          <Route path='/product/:productId'>
            <Product />
          </Route>

          <Route path='/newProduct'>
            <NewProduct />
          </Route>

        </Switch>        
      </div>
    </Router>
  );
}

export default App;
