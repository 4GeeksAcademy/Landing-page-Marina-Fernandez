import React from "react";

const Micard = ({ cards, cardStyle, imageStyle, bodyStyle }) => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      {cards.map((card, idx) => (
        <div className="col-md-3 mb-4 d-flex justify-content-center" key={idx}>
          <div className="card" style={cardStyle}>
            <img
              src={card.img}
              className="card-img-top"
              style={imageStyle}
              alt={card.title}
            />
            <div className="card-body" style={bodyStyle}>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#" className="btn btn-success mt-3">Comprar</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Micard;