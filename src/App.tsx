import * as React from 'react';
import './App.css';

import { Button } from './button';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
          <Header/>
          <Button/>
          <Card/>
      </div>
    );
  }
}

function Header(){
  const styles = {
    width: '300px'
  }

  return (
      <h1 className="mx-auto" style={styles}>Github Cards</h1>
  )
}


function Card() {
  return (
      <div className="github-profile">
        One Github Profile
      </div>
  )
}

export default App;
