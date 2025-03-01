
import React, { useContext, useEffect } from "react";
import Routere from "./Router";

import { DataContext } from "./Components/DataProvider/Dataprovider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import './index.css'

function App() {
  const [{ user }, dispatch] = useContext(DataContext); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
  }, []); // Dependency array to run only once

  return (
    <>
      <Routere />
    </>
  );
}

export default App;
