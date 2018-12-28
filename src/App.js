import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import MainNavigation from './components/Navigation'

import Button from './components/Button'
import ButtonWrapper from './components/Button/ButtonWrapper'
import { Title, H2, Display, P } from './components/Text'

class App extends Component {
  render() {
    const paragraph = "This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. This is an example of a paragraph element. "

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <header>
          <MainNavigation navItems={['Home', 'Work', 'Play', 'Contact']} />
        </header>
        <Title text={'Title'}/>
        <H2 text={'Header Two'}/>
        <Display text={'Display Text'}/>
        <P text={paragraph}/>

        <ButtonWrapper>
          <Button text={'primary'}/>
          <Button text={'Disabled'} isDisabled={true}></Button>
        </ButtonWrapper>
      </div>
    );
  }
}

export default App;
