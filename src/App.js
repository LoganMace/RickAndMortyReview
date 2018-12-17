import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './ducks/store';
import { HashRouter } from 'react-router-dom';

import routes from './routes';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <NavBar/>
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
