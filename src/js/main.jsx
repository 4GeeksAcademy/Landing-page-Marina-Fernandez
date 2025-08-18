import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


import '../styles/index.css'

import MiNavbar from './components/MiNavbar';
import MiJumbotron from './components/MiJumbotron';
import Micard from './components/Micard';
import Mifooter from './components/Mifooter';

const cardStyle = {
  width: "15rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const imageStyle = {
  height: "180px",
  objectFit: "cover",
};

const bodyStyle = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const cards = [
  {
    title: "Manzanilla",
    img: "https://tse3.mm.bing.net/th/id/OIP.Dpg6SqG5vM4KqGTDRBfO4QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "Es una de las plantas más poderosas y la tenemos al alcance de nuestras manos.",
  },
  {
    title: "Orégano",
    img: "https://th.bing.com/th/id/OSK.HEROy5-_7_oSR_N43ZoJmQ88LjGpk6bbF_wUlb1oVMQbQBQ?w=472&h=280&c=1&rs=2&o=6&dpr=2&pid=SANGAM",
    text: "Ayuda a prevenir enfermedades, combate bacterias y hongos, mejora la digestión y alivia la congestión.",
  },
  {
    title: "Lavanda",
    img: "https://th.bing.com/th/id/OSK.HEROc9W7zUa75SzeNLZ2h0J5aNTgwnzxCFLR_1ZKyhjSfhA?w=472&h=280&c=13&rs=2&o=6&dpr=2&pid=SANGAM",
    text: "Relaja el sistema nervioso, trata infecciones, mejora la digestión y fortalece el cabello.",
  },
  {
    title: "Tomillo",
    img: "https://germinacion.github.io/img/tomillo.jpg",
    text: "Sus aceites esenciales producen un aroma intenso que atrae polinizadores.",
  },
];

const Main = () => (
  <>
    <MiNavbar />
    <MiJumbotron />
    <Micard
      cards={cards}
      cardStyle={cardStyle}
      imageStyle={imageStyle}
      bodyStyle={bodyStyle}
    />
    <Mifooter />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)


