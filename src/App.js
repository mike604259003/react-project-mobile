import React, {Component} from 'react';
import { HashRouter , Route , Switch ,Redirect } from 'react-router-dom';
import SelectMenu from './Mobile/SelectMenu';
import Menu from './Mobile/Menu';
import Increment from './Mobile/Component/Increment';
import Cart from './Mobile/Cart';
import {history} from './history';
import EditIncrement from './Mobile/Component/EditIncrement';
import Default from './Default';
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/demo/demo.css";
import Header from './Mobile/Component/Header';
import Home from './Mobile/Home';
import Succes from './Mobile/Succes';





class App extends Component{
  render(){
    return(
      <div className="App">
     
      <HashRouter history={history}> 
      <Header/>
        <Switch style={{backgroundImage:"url(https://myseshabu.com/image/bg.jpg)",height:"100%",backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <Route exact path="/home/:table/:bill" component={Home} />
          <Route exact path="/selectmenu" component={SelectMenu} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/increment" component={Increment} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/succes" component={Succes} />
          <Route exact path="/editincrement" component={EditIncrement} />
          <Route exact path="/default" component={Default}/>
          <Redirect from="*" to="/default"/>
        </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default App;
