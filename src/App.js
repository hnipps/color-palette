import React, { Component } from 'react';

import './App.css';
import { ColorSwatch } from './components/color-swatch/ColorSwatch';
import { ColorList } from './components/color-list/ColorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorInfo: {
        color: '#ff0000',
        label: 'red'
      }
    };
  }

  handleClick = colorInfo => event => this.setState({ colorInfo });

  render() {
    const colorSwatches = [
      { color: '#ff0000', label: 'red' },
      { color: '#fff000', label: 'yellow' },
      { color: '#FF9C33', label: 'orange' },
      { color: '#4FFF33', label: 'green' },
      { color: '#33FFF6', label: 'aqua' },
      { color: '#FF33EC', label: 'pink' },
      { color: '#9F33FF', label: 'purple' },
      { color: '#33FFB5', label: 'light green' },
      { color: '#8B0000', label: 'dark red' },
      { color: '#8B005D', label: 'burdgundy' },
      { color: '#FFEEB0', label: 'cream' },
      { color: '#CD5C5C', label: 'indian red' },
      { color: '#FA8072', label: 'salmon' },
      { color: '#FF1493', label: 'deep pink' },
      { color: '#FF6347', label: 'tomato' },
      { color: '#FFD700', label: 'gold' },
      { color: '#FFE4B5', label: 'moccasin' },
      { color: '#DDA0DD', label: 'plum' },
      { color: '#4B0082', label: 'indigo' },
      { color: '#008080', label: 'teal' },
      { color: '#1E90FF', label: 'dodger blue' }
    ];
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__content">Color Explorer</h1>
        </header>
        <div className="main">
          <ColorSwatch
            element="div"
            variant="large"
            {...this.state.colorInfo}
          />
          <ColorList colorSwatches={colorSwatches} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
