import React, { useEffect, useState } from "react";
import containerReducer from "./containerReducer";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import { mercRepo } from "../repositories/mercRepo";

/*
  Dette er hoved containeren, den skal orcestrere mange skjermbilder,
  Det gjøres ved hjelp av kall til reduceren,
  Resultatet av kallene dispatcher til reduceren, som oppdaterer state
  Pga state oppdateringen remdres containeren på nytt.
  Da kan vi bruke state til å velge hvilket underskjermbilde vi skal vise

  Vi skal lage en dialog:
  1 Velkomstbilde
  2 Hjem (forklaring)
  3 Liste over produkter (klikk på produkt går til neste)
  4 Detaljer for produkt
  5 Checkout av handlekurv
  6 Bekreftelse av bestilling

Det skal være mulig å klikke seg tilbake i dialogen.

 ((state.activeForm === forms.WELCOMEFORM) && <Welcome />)
 */

const Container = (props) => {
  const [repo, setRepo] = useState(mercRepo());
  const { forms, state, showHome, showMercList } = containerReducer(repo);

  console.log("AKTIV form:", state.activeForm);

  return (
    <div>
      {state.activeForm === forms.WELCOME && <Welcome next={showHome} />}

      {state.activeForm === forms.HOME && <Home next={showMercList} />}
    </div>
  );
};

export default Container;
