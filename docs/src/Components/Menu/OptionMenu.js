import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

function OptionMenu(props){
    const {opcion} = props;
       
    return(

            <Nav.Link as={Link} to={opcion.path}>{opcion.label}</Nav.Link>
    )
}

export default OptionMenu; 