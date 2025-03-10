import React from "react";
import "./testimonial.css"; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1 className="title">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
      </h1>

      <div className="cards">
        <div className="card">
          <div className="card-content">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <p1>Many more</p1>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Lorem Ipsum It’s Simply</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <p1>Many more</p1>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>Lorem Ipsum It’s</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <p1>Many more</p1>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="subtitle">Accompanie</h2>
        <div className="stars">★★★★★</div>
        <p className="description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old...
        </p>

        <div className="carousel">
          <button className="carousel-button">←</button>
          <div className="carousel-indicator">
            <div className="circle"></div>
            <p>Chunks</p>
          </div>
          <button className="carousel-button">→</button>
        </div>
      </div>
    </div>
  )
}
export default App