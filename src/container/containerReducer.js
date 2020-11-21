import { useReducer } from "react";

const useUserAdminReducer = (mercRepo) => {
  const forms = {
    WELCOME: "WELCOME",
    HOME: "HOME"
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
    SHOW_HOME: "SHOW_HOME"
  };

  // Her er settes state basert på et dispatch kall
  const dataReducer = (state, action) => {
    console.log("UseAxios: ", JSON.stringify(action));

    switch (action.type) {
      case actions.LOADING:
        return {
          ...state,
          loading: false,
          error: null
        };

      case actions.SHOW_HOME:
        return {
          ...state,
          activeForm: forms.HOME,
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
  const showMercList = () => {
    let mercs = mercRepo.getAll();
    if (mercs.count > 0) {
      dispatch({ type: actions.SHOW_MERCS, data: null });
    }
  };

  return {
    forms,
    state,
    showHome,
    showMercList
  };
};

export default useUserAdminReducer;
