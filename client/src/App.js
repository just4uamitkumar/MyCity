import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CityList from './components/CityList';
import ItemModal from './components/itemModal';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App" >
          <header>
            <AppNavbar />
          </header>

          <section className="content">
            <div className="container">
              <ItemModal />
              <CityList />
            </div>

          </section>
        </div>
      </Provider>
    );

  }

}

export default App;
