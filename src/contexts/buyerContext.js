import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();
const initialState = {
  products: [],
};

export const StoreProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
