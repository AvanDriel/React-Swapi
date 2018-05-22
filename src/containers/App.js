import React, { Component } from 'react';
import '../style/App.css';
import CategoryOverview from './CategoryOverview'
import {
  Route,
  Switch,
  HashRouter,
  Link
} from 'react-router-dom'
import Detail from './Detail'
import DetailList from './DetailList'
import { Header } from '../components/Header'
import { HeaderLogo } from '../components/HeaderLogo'
import swlogo from '../style/images/starwars.png'
import { Spacer } from '../components/Spacer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <Header>
          <Link to='/'>
            <HeaderLogo src={ swlogo } />
          </Link>  
        </Header>  
        <Spacer />
          <Switch>
            <Route exact path="/" component={ CategoryOverview } />
            <Route path="/category/:category" component={ Detail }/>
            <Route path="/info/:category/:name" component={ DetailList }/>
          </Switch>  
        </div>
      </HashRouter>
    );
  }
}

export default App;
