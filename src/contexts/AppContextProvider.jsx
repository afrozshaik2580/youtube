/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  isMenuOpen: false,
  searchResults: [],
  activeShortSideBarButton: "Home",
  activeLongSideBarButton: "Home",
};

function reducer(state, action) {
  switch (action.type) {

    case "toggleMenuHandler":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    case "setActiveShortSideBarButton":
      return {
        ...state,
        activeShortSideBarButton: action.payload,
        activeLongSideBarButton: action.payload,
      };


    default:
      throw new Error("Unknown action type");
  }
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const state = useContext(AppContext);
  return state;
}

export { AppContextProvider, useAppContext };
