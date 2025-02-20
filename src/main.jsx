import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { Dataprovider } from './Components/DataProvider/Dataprovider.jsx'
import {initialState, reducer} from './Utility/reducer'


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dataprovider reducer={reducer} initialState={initialState}>
      <App />
    </Dataprovider>
  </React.StrictMode>
);
