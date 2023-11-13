import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "view/MainLayout";
import Menu from "view/MainLayout/Menu";
import About from "view/MainLayout/About";
import Reservations from "view/MainLayout/Reservations";


// Providery zmiennych do motywów MUI material i joy, oraz poszerzenie 
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy";
import Login from "view/MainLayout/Login";



const router = createBrowserRouter([
    { 
      path: "/",
      element: <MainLayout/>,
      children : [
        {
          path : "home",
          element : <MainLayout/>
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
