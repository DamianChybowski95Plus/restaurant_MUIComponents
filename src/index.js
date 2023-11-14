import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "view/App/Menu";
import About from "view/App/About";
import Reservations from "view/App/Reservations";
import Login from "view/App/Login";
import Home from "view/App/Home";
import App from "view/App";

// Providery zmiennych do motywów MUI material i joy, oraz poszerzenie 
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';

import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App/>,
      children : [
        {
          path : "home",
          element : <Home/>
        },
        {
          path: "about",
          element : <About/>
        },
        {
          path: "menu",
          element : <Menu/>
        },
        {
          path: "reservations",
          element : <Reservations/>
        },
        {
          path : "login",
          element : <Login/>
        }
      ]
    },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <MaterialCssVarsProvider theme={{[MATERIAL_THEME_ID]: materialExtendTheme()}}>
          <JoyCssVarsProvider>    
            <RouterProvider router={router}/>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </React.StrictMode>
)
