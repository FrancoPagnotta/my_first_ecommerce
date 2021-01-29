import React from "react";
import Form from 'react-bootstrap/Form'

function FormGroup (props){
    return (
        <Form.Group controlId={"formGroupEmail" + props.name}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.change}/>    
                </Form.Group>

    )
}

export default FormGroup;