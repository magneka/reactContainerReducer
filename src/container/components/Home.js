import React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Vi skal nå lage en ..</h1>
      <p>Klikk på knappen for å fortsette</p>
      <button onClick={props.next}>Show med the goodies</button>
    </>
  );
};

export default Home;
