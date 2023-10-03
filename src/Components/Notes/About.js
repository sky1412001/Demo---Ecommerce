import React from "react";
import './Note.css'

const About = () => {
  return (
    <div className="section">
      <div className="Scontainer">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <div className="article">
            <h3>
              A tall player at 6 feet 1 inch (1.85 metres), Ronaldo was a
              formidable athlete on the pitch. Originally a right-winger, he
              developed into a forward with a free-reined attacking style. He
              was able to mesmerize opponents with a sleight of foot that made
              sufficient space for openings in opposing defenses.
            </h3>
            <p>
              Ronaldo’s father, José Dinis Aveiro, was the equipment manager for
              the local club Andorinha. (The name Ronaldo was added to
              Cristiano’s name in honour of his father’s favourite movie actor,
              Ronald Reagan, who was U.S. president at the time of Cristiano’s
              birth.) At age 15 Ronaldo was diagnosed with a heart condition
              that necessitated surgery, but he was sidelined only briefly and
              made a full recovery. He first played for Clube Desportivo
              Nacional of Madeira and then transferred to Sporting Clube de
              Portugal (known as Sporting Lisbon), where he played for that
              club’s various youth teams before making his debut on Sporting’s
              first team in 2002.
            </p>
            <div className="button">
              <button>Read more</button>
            </div>
          </div>
          <div className="image-section">
            <img src="https://cdn.britannica.com/63/222663-050-58CCA884/Soccer-forward-Cristiano-Ronaldo-2018.jpg?w=400&h=300&c=crop" alt="..." />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
