import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/HomePage/Header'

class App extends Component {
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
