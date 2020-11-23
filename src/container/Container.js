import React, { useEffect, useState } from "react";
import containerReducer from "./containerReducer";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import MercList from "./components/MercList";
import MercItem from "./components/MercItem";
import ShoppingCart from './components/ShoppingCart'
import Menu from './components/Menu'
import { SpinnerPage } from "./components/SpinnerPage";
import { mercRepo } from "../repositories/mercRepo";

/*
  Dette er hoved containeren, den skal orcestrere mange skjermbilder,
  Det gjøres ved hjelp av kall til reduceren,
  Resultatet av kallene dispatcher til reduceren, som oppdaterer state
  Pga avt at state er endret, remdres containeren på nytt.
  Da kan vi bruke state til å velge hvilket underskjermbilde vi skal vise

 */

const Container = (props) => {
  // VI vil ha repository i state, og bruker en useeffect for å unngå at merc inistaliseres for hver rendering
  const [repo, setRepo] = useState();
  useEffect(() => {
    setRepo(mercRepo());
  }, []);

  const {
    forms,
    state,
    showHome,
    showMercList,
    showProduct,
    buyItem,
    showShoppingCart
  } = containerReducer(repo);

  console.log("AKTIV form:", state.activeForm);

  if (state.loading) return <SpinnerPage />;

  return (
    <div>
      
      {/*  Welcome bildet
        Dersom det første uttrykket er false, sjekkes ikke neste uttrykk 
        Neste uttrykk rendrer innhodld, dvs Welcome componenten
      */}
      {state.activeForm === forms.WELCOME && <Welcome next={showHome} />}

      {/* Home siden */}
      {state.activeForm === forms.HOME && <Home next={showMercList} />}

      {/* Siden med listen over produkter, merk at her har også rendret menyen */}
      {state.activeForm === forms.MERCLIST && (
        <>
          <Menu hjem={showHome} tilProduktListen={showMercList} tilShoppingCart={showShoppingCart} />
          <MercList mercs={state.items} showProduct={showProduct} />
        </>
      )}

      {/* Detaljbilde for Mercs, med meny.. */}
      {state.activeForm === forms.MERCDETAILS && (
        <>
          <Menu hjem={showHome} tilProduktListen={showMercList} tilShoppingCart={showShoppingCart} />
          <MercItem item={state.currentItem} buyItem={buyItem} />
        </>
      )}

      {/* Detaljbilde for ShoppingCart, med meny.. */}
      {state.activeForm === forms.SHOPPINGCART && (
        <>
          <Menu hjem={showHome} tilProduktListen={showMercList} tilShoppingCart={showShoppingCart} />
          <ShoppingCart shoppingCart={state.shoppingCart}  />
        </>
      )}



    </div>
  );
};

export default Container;
