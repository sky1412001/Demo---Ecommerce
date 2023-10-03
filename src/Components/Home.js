import React from "react";
import "./Page.css";
import { useNavigate } from "react-router";
// import About from "./Notes/About";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="training-section">

        <div className="container">
          <div className="item-container">
            <img
              src="https://play-lh.googleusercontent.com/NWYVIVO0nqaMdRNcPMFBy2C_Cy6Ms57_hbm0xu6vHjK48K_73rcyf06eCjxorXkgrXI"
              alt="..."
            />
            <h3>Cristiano</h3>
            <button onClick={() => navigate("/ronaldo")}>GO</button>
          </div>
          <div className="item-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-mOhcMEu2e0n_eI02kzD02GJNZ3yEjb4uQ&usqp=CAU"
              alt="..."
            />
            <h3>Lionel Messi</h3>
            <button onClick={() => navigate("/messi")}>GO</button>
          </div>
          <div className="item-container">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/627bd53a3a4d3cd7729717cc/0x0.jpg?format=jpg&crop=1069,1070,x707,y83,safe&height=416&width=416&fit=bounds"
              alt="..."
            />
            <h3>Neymar jr</h3>
            <button onClick={() => navigate("/neymar")}>GO</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
