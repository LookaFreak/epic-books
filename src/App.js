// App.js
import React from 'react';
import MyNav from './MyNav';
import Welcome from './Welcome';
import AlltheBooks from './AlltheBooks';
import MyFooter from './MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AlltheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
