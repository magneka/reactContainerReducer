import { useReducer } from "react";

const useUserAdminReducer = (mercRepo) => {
  const forms = {
    WELCOME: "WELCOME",
    HOME: "HOME",
    MERCLIST: "MERCLIST",
    MERCDETAILS: "MERCDETAILS"
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
    MERCS_ITEM_RECEIVED: "MERCS_ITEM_RECEIVED"
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

  const showProduct = (produktId) => {
    console.log("ShowProdukt:", produktId);
    let mercItem = mercRepo.findProdukt(produktId);
    console.log("ShowProdukt:", mercItem);
    if (mercItem) {
      dispatch({ type: actions.MERCS_ITEM_RECEIVED, data: mercItem });
    }
  };

  const buyItem = (produktId, count) => {
    console.log("Shopping", produktId, count);
  };

  return {
    forms,
    state,
    showHome,
    showMercList,
    showProduct,
    buyItem
  };
};

export default useUserAdminReducer;
