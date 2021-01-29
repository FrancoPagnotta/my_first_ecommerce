import React from "react";
import Alert from 'react-bootstrap/Alert'

function AlertCustom (props){

    return(
        <Alert variant={props.variant}>
            {props.text}
        </Alert>
    )
}

export default AlertCustom;