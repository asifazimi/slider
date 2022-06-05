import React, { useState, useEffect } from "react";
// Local API
import people from "./data";
// Components
import Person from "./components/Person";
// Icons
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [persons, setPersons] = useState(people);
  const [index, setIndex] = useState(0);

  // To fix the last and the first slider isues
  useEffect(() => {
    const lastSlide = persons.length - 1;
    if (index < 0) {
      setIndex(lastSlide);
    }
    if (index > lastSlide) {
      setIndex(0);
    }
  }, [index, persons]);

  // To make our sliders go automatically
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {persons.map((person, personIndex) => {
          const { name, title, quote, image, id } = person;

          // more stuf coming
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === persons.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img"></img>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
