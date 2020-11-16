import { useReducer } from "react";

const useUserAdminReducer = (messages) => {
  const displayForms = {
    SEARCHFORM: "SEARCHFORM",
    SEARCHRESULT: "SEARCHRESULT",
    EDITFORM: "EDITFORM"
  };

  const initialState = {
    items: {},
    currentItem: {},
    activeForm: displayForms.SEARCHFORM,
    loading: false,
    error: ""
  };

  const actions = {
    LOADING: "LOADING",
    RESET: "RESET",
    SHOW_SEARCHFORM: "SHOW_SEARCHFORM",
    SHOW_SEARCHRESULTS: "SHOW_SEARCHRESULTS",
    SHOW_USERDETAILS: "SHOW_USERDETAILS",
    SHOW_EMPTYUSER: "SHOW_EMPTYUSER",
    DATA: "DATA",
    ERROR: "ERROR"
  };

  const dataReducer = (state, action) => {
    console.log("UseAxios: ", JSON.stringify(action));

    switch (action.type) {
      case actions.LOADING:
        return {
          ...state,
          activeForm: displayForms.SEARCHFORM,
          loading: false,
          error: null
        };

      case actions.RESET:
        return {
          ...initialState
        };

      case actions.SHOW_SEARCHFORM:
        return {
          ...state,
          activeForm: displayForms.SEARCHFORM,
          loading: false,
          error: null
        };

      case actions.SHOW_SEARCHRESULTS:
        return {
          ...state,
          users: action.data,
          activeForm: displayForms.SEARCHRESULT,
          loading: false,
          error: null
        };

      case actions.SHOW_USERDETAILS:
        return {
          ...state,
          user: action.data,
          activeForm: displayForms.EDITFORM,
          loading: false,
          error: null
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Hver metode under vil ha et eget axioskall med then og catch
  const resetContainer = () => {
    dispatch({ type: actions.SHOW_SEARCHFORM, data: initialState });
  };
  const showSearchForm = () => {
    dispatch({ type: actions.SHOW_SEARCHFORM, data: null });
  };
  const searchItems = (searchField, searchValue) => {};
  const setCurrentItem = (userName) => {};
  const getUser = (email) => {};
  const updateItem = (userData) => {};
  const createItem = (userData) => {};

  return {
    state,
    displayForms,
    resetContainer,
    showSearchForm,
    searchItems,
    setCurrentItem,
    getUser,
    updateItem,
    createItem
  };
};

export default useUserAdminReducer;
