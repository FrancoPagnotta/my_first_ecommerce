import React, {useState} from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Menu from "./Components/Menu/index"
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb"
import GlobalState from "./Context/GlobalState"


function App () {

  const [opciones] = useState ([
    {
      path:"/",
      label:"Home"
    },
    {
      path:"/registro",
      label:"Registro"
    },
    {
      path:"/login",
      label:"Ingresar"
    }

  ])
 

    return (
      <GlobalState>
        <BrowserRouter>
          <Menu data = {opciones}/>
          <RoutesWeb/>
        </BrowserRouter>
      </GlobalState>
    )
}


export default App;
