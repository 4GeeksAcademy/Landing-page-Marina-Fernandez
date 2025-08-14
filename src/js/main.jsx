import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import MiNavbar from './components/MiNavbar';
import MiJumbotron from './components/MiJumbotron';
import Micard from './components/Micard';
import Mifooter from './components/Mifooter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <MiNavbar />
   <MiJumbotron />
   <Micard />)
   <Mifooter />
  </React.StrictMode>,
)


