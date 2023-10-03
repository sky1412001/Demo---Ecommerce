import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <div className="Vcontainer">
      <h1 class="heading">Our services</h1>

      <div className="box-container">
        <div className="box">
          <img
            src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-football-shoes-icon-vector-illustration-in-line-style-for-any-purpose-png-image_987851.jpg"
            alt=".."
          />
          <h3>Lorem</h3>
          <p>
            {" "}
            Ronaldo’s father, José Dinis Aveiro, was the equipment manager for
            the local club Andorinha.{" "}
          </p>
          <button>More-info</button>
        </div>
        <div className="box">
          <img
            src="https://png.pngtree.com/png-vector/20190903/ourmid/pngtree-football-logo-designs-inspiration-isolated-on-white-background-png-image_1721380.jpg"
            alt=".."
          />
          <h3>Lorem</h3>
          <p>
            {" "}
            Ronaldo’s father, José Dinis Aveiro, was the equipment manager for
            the local club Andorinha.{" "}
          </p>
          <button>More-info</button>
        </div>
        <div className="box">
          <img
            src="https://png.pngtree.com/template/20190423/ourmid/pngtree-soccer-logo-template-design--soccer-logo-with-modern-frame-image_144566.jpg"
            alt=".."
          />
          <h3>Lorem</h3>
          <p>
            {" "}
            Ronaldo’s father, José Dinis Aveiro, was the equipment manager for
            the local club Andorinha.{" "}
          </p>
          <button>More-info</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
