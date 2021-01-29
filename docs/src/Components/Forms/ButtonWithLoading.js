import React from 'react';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

function ButtonWithLoading (props) {

    const {variant, type, loading,text} = props;

    return (
        <Button variant={variant || "outline-success"} type={type || "submit"} disabled={loading}>
                        {
                            loading && 
                            <Spinner animation="border" variant="light" size="sm" />
                        }
                       {text}
                    </Button>
       
    )
}

export default ButtonWithLoading;