import React, { Component } from 'react';
import '../style/App.css';
import CategoryOverview from './CategoryOverview'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'
import Detail from './Detail'
import DetailList from './DetailList'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={CategoryOverview} />
            <Route path="/category/:category" component={Detail}/>
            <Route path="/info/:category/:name" component={DetailList}/>
          </Switch>  
        </div>
      </HashRouter>
    );
  }
}

export default App;
