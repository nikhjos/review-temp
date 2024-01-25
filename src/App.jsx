import React, { useState } from "react";
import data from "./data";
import Reviews from "./Reviews";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1;

      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    const randomPerson = Math.floor(Math.random() * data.length);
    setIndex(checkNumber(randomPerson));
  };

  return (
    <main>
      <Reviews
        {...data[index]}
        nextPerson={nextPerson}
        prevPerson={prevPerson}
        randomPerson={randomPerson}
      />
    </main>
  );
};

export default App;
