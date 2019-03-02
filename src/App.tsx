import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
          <Header/>
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
        <img src="https://placehold.it/75" alt=""/>
        <div className="info">
          <div className="name">Name goes here</div>
          <div className="company">Company</div>
        </div>
      </div>
  )
}

export default App;
