import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext = createContext(); // Ensure DataContext is exported

export const Dataprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
