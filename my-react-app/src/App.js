import React from 'react';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT APP</h1>
        <br></br>
        <br></br>
        <h2>1- AddProduct component form:</h2>
        <br></br>
        <AddProduct />
        <br></br>
        <br></br>
        <h2>2- SignUpUser component form:</h2>
        <br></br>
        <SignUpUser />
      </header>
      <footer className="App-footer">
        &copy; 2023 Prayas Shrestha_301271689. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
