import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './basic/App';
// import Navbar from './basic/Navbar';
// import Variable from './basic/Variable';
// import StateProps from './basic/StateProps';
// import Map from './basic/Map';
// import Lifecycle from './basic/Lifecycle';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import Crud from './crud';
import Home from './pages/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

 