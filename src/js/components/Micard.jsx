import React from "react";

const Micard = () => {
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

  return (
    <div className="mt-5 mx-5">
      <div
        className="d-flex justify-content-center gap-4 flex-row"
        style={{ flexWrap: "nowrap" }}
      >
        
        <div className="card" style={cardStyle}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.Dpg6SqG5vM4KqGTDRBfO4QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
            className="card-img-top"
            style={imageStyle}
            alt="Manzanilla"
          />
          <div className="card-body" style={bodyStyle}>
            <div>
              <h5 className="card-title">Manzanilla</h5>
              <p className="card-text">
                Es una de las plantas más poderosas y la tenemos al alcance de nuestras manos.
              </p>
            </div>
            <a href="#" className="btn btn-success mt-3">Comprar</a>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            src="https://th.bing.com/th/id/OSK.HEROy5-_7_oSR_N43ZoJmQ88LjGpk6bbF_wUlb1oVMQbQBQ?w=472&h=280&c=1&rs=2&o=6&dpr=2&pid=SANGAM"
            className="card-img-top"
            style={imageStyle}
            alt="Orégano"
          />
          <div className="card-body" style={bodyStyle}>
            <div>
              <h5 className="card-title">Orégano</h5>
              <p className="card-text">
                Ayuda a prevenir enfermedades, combate bacterias y hongos, mejora la digestión y alivia la congestión.
              </p>
            </div>
            <a href="#" className="btn btn-success mt-3">Comprar</a>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            src="https://th.bing.com/th/id/OSK.HEROc9W7zUa75SzeNLZ2h0J5aNTgwnzxCFLR_1ZKyhjSfhA?w=472&h=280&c=13&rs=2&o=6&dpr=2&pid=SANGAM"
            className="card-img-top"
            style={imageStyle}
            alt="Lavanda"
          />
          <div className="card-body" style={bodyStyle}>
            <div>
              <h5 className="card-title">Lavanda</h5>
              <p className="card-text">
                Relaja el sistema nervioso, trata infecciones, mejora la digestión y fortalece el cabello.
              </p>
            </div>
            <a href="#" className="btn btn-success mt-3">Comprar</a>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            src="https://germinacion.github.io/img/tomillo.jpg"
            className="card-img-top"
            style={imageStyle}
            alt="Tomillo"
          />
          <div className="card-body" style={bodyStyle}>
            <div>
              <h5 className="card-title">Tomillo</h5>
              <p className="card-text">
                Sus aceites esenciales producen un aroma intenso que atrae polinizadores.
              </p>
            </div>
            <a href="#" className="btn btn-success mt-3">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Micard;