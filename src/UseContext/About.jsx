import React, { useContext } from "react";
import { newContext } from "./UseContext";

const About = () => {
  const display = useContext(newContext);
  const { first, setfirst, name, car, setname, setcar } = display;

  return (
    <div>
      <h1>{first}</h1>

      <h1></h1>
      {car.map((abc) => (
        <h1>
          {" "}
          {abc.Name} {abc.Color}{" "}
        </h1>
      ))}

      <button onClick={() => setfirst("Explore")}> Change </button>
      <h3>{name.Name}</h3>
      <h3> {name.Age} </h3>
    </div>
  );
};

export default About;
