import { createContext } from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import watchlaterReducer from "../reducers/watchlaterreducer";
export const WatchlaterContext = createContext();

export const WatchlaterProvider = ({ children }) => {
  const [state, watchlaterdispatch] = useReducer(watchlaterReducer, {
    watchlater: []
  });
  useEffect(() => {
    (async () => {
      const { videos: data } = await axios
        .get("https://VL.saswatidas.repl.co/watchlater")
        .then((response) => {
          return response.data;
        });
      watchlaterdispatch({ type: "FETCH", payload: data });
    })();
  }, []);

  return (
    <WatchlaterContext.Provider
      value={{ watchlater: state.watchlater, watchlaterdispatch }}
    >
      {children}
    </WatchlaterContext.Provider>
  );
};
export function useWatchlater() {
  return useContext(WatchlaterContext);
}
