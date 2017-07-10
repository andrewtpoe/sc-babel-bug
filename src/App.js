import React, { Component } from 'react';

import Body from './Body';
import Header from './Header';
import P from './P';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h2>Styled Components Babel Plugin Bug</h2>
        </Header>
        <Body>
          <P>
            Inspect the html. See that the class names are something like
            "Body__Body-hVCOAV juwKSM"
          </P>
        </Body>
      </div>
    );
  }
}

export default App;
