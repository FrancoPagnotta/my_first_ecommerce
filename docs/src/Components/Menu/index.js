import React from "react";
import OptionMenu from "./OptionMenu"
import Nav from 'react-bootstrap/Nav'
import {Navbar} from 'react-bootstrap'
import ObjectContext from "../../Context/ObjectContext"


function Menu (props) {
   return(
       <ObjectContext.Consumer>
           {
               context =>
               <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">¡Bienvenido!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                context.login &&
                                <>
                                <OptionMenu opcion={{label:"Inicio", path:"/"}} />
                                <Nav.Link onClick={context.logoutUser} >Salir</Nav.Link>
                                </>
                            }
                            {
                                !context.login &&
                                <>
                                    <OptionMenu opcion={{label:"Inicio", path:"/"}} />
                                    <OptionMenu opcion={{label:"Registro", path:"/registro"}} />
                                    <OptionMenu opcion={{label:"Ingresar", path:"/login"}} />
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
           }
            
        </ObjectContext.Consumer> 
    )
}
export default Menu;

/* this.props.titulo para SOLO leer el titulo*/
/**{this.props.titulo} para imprimir el titulo en el div */