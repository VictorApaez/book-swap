import React, { createContext, useContext, useReducer } from "react";

//create a context instance
export const StateContext = createContext();
// initial state: basket:[], reducer: ADD_TO_BASKET,
export const StateProvider = ({ reducer, initialState, children }) => (
    
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// export const useStateValue = () => useContext(StateContext);