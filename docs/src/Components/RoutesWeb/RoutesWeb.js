import {Route} from 'react-router-dom'
import Home from "../../Pages/Home"
import Registro from "../../Pages/Registro"
import Login from "../../Pages/Login"
import ProductoDetalle from "../../Pages/ProductoDetalle"

function RoutesWeb () {
    return (
        <>
            <Route path ="/" exact component = {Home}/>
            <Route path = "/registro" exact component = {Registro}/>
            <Route path = "/login" exact component = {Login}/>
            <Route path = "/Productos/:id" exact component = {ProductoDetalle} />
        </>
    );
}
export default RoutesWeb;