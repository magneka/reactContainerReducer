import { useReducer } from "react";
import { validateLocaleAndSetLanguage } from "typescript";

const useUserAdminReducer = (mercRepo) => {
  const forms = {
    WELCOME: "WELCOME",
    HOME: "HOME",
    MERCLIST: "MERCLIST",
    MERCDETAILS: "MERCDETAILS",
    SHOPPINGCART: 'SHOPPINGCART'
  };

  // Vi lager et initielt state object etter eget valg
  const initialState = {
    items: [],
    currentItem: {},
    shoppingCart: [],
    activeForm: forms.WELCOME,
    loading: false,
    error: ""
  };

  const actions = {
    LOADING: "LOADING",
    SHOW_HOME: "SHOW_HOME",
    SHOW_MERCS: "MERCS_RECEIVED",
    MERCS_ITEM_RECEIVED: "MERCS_ITEM_RECEIVED",
    MERCS_SHOP: 'MERCS_SHOP',
    SHOW_SHOPPINGCART: 'SHOW_SHOPPINGCART'
  };

  // Her er settes state basert på et dispatch kall
  const dataReducer = (state, action) => {
    console.log("datareducer: ", JSON.stringify(action));

    switch (action.type) {
      case actions.LOADING:
        return {
          ...state,
          loading: true,
          error: null
        };

      case actions.SHOW_HOME:
        return {
          ...state,
          activeForm: forms.HOME,
          loading: false,
          error: null
        };

      case actions.MERCS_RECEIVED:
        return {
          ...state,
          items: action.data,
          activeForm: forms.MERCLIST,
          loading: false,
          error: null
        };

      case actions.MERCS_ITEM_RECEIVED:
        return {
          ...state,
          currentItem: action.data,
          activeForm: forms.MERCDETAILS,
          loading: false,
          error: null
        };

      case actions.MERCS_SHOP: {
        return {
          ...state,
          items: action.data.items,
          shoppingCart: action.data.shoppingCart,
          currentItem: action.data.currentItem,
          activeForm: forms.MERCLIST,
          loading: false,
          error: null
        };
      }
        
      case actions.SHOW_SHOPPINGCART: {
        return {
          ...state,          
          activeForm: forms.SHOPPINGCART,
          loading: false,
          error: null
        };
      }  

      default:
        return state;
    }
  };

  // Her aktiveres reduceren i react, og vi får tilbake state objectet og dispatch funksjonen
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const showHome = () => {
    dispatch({ type: actions.SHOW_HOME, data: null });
  };

  const showMercList = async () => {
    dispatch({ type: actions.LOADING, data: null });

    let mercs = await mercRepo.getAll();

    if (mercs.length > 0) {
      dispatch({ type: actions.MERCS_RECEIVED, data: mercs });
    }
  };

  const showProduct = async (produktId) => {
    // **********************************************************
    // TODO - Lag feilside dersom du ikke finner produktet
    // **********************************************************

    console.log("ShowProdukt:", produktId);
    let mercItem = await mercRepo.findProdukt(produktId);
    console.log("ShowProdukt:", mercItem);
    if (mercItem) {
      dispatch({ type: actions.MERCS_ITEM_RECEIVED, data: mercItem });
    }
  };

  const buyItem = async (produktId, count) => {
    // Dersom nok på lager, oppdater item men ny lagergeholdning, og gå til produktlisten
    console.log("buyItem", produktId, count);
    let mercItem = await mercRepo.findProdukt(produktId);

    if (mercItem.lager >= count) {
      mercItem.lager = mercItem.lager - count

      // oppdater mercrepo
      await mercRepo.update(mercItem)

      // hent alle for å legge på state
      let mercs = await mercRepo.getAll();

      // Bruk spread operatoren for å legge til et nytt objekt i shoppingcart
      let shoppingCart = [...state.shoppingCart, { produktId: produktId, produkt: mercItem.produkt, antall: count }]

      // Dispatch MERCS_SHOP, med oppdaterte data for liste, currentItem, og shoppingCart, som sender deg til produktlisten
      dispatch({ type: actions.MERCS_SHOP, data: { shoppingCart: shoppingCart, items: mercs, currentItem: mercItem } })
    }
  }

  const showShoppingCart = () => {
    dispatch({ type: actions.SHOW_SHOPPINGCART, data: null });
  }

  return {
    forms,
    state,
    showHome,
    showMercList,
    showProduct,
    buyItem,
    showShoppingCart
  };
};

export default useUserAdminReducer;
