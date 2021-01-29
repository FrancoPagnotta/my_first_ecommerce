import React, {useState,useEffect,} from "react";
import './ProductoDetalle.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import firebase from '../Config/firebase'
import Image from 'react-bootstrap/Image'
import ObjectContext from "../Context/ObjectContext";



   function ProductoDetalle(props) {
       const [producto,setProducto] = useState ({})

       useEffect (
           ()=>{
               /*getProducto(props.match.params.id)
               .then((data)=>{
                    setProducto (data[0])
           })*/
           firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                console.log("doc",doc.data())
                setProducto(doc.data())
            })
        },[]
       
    )
     function comprar() {
        alert("gracias por su compra")
}
        return(
            <ObjectContext.Consumer>
            { 
                context =>
                <Jumbotron fluid>
                    <Container>
                        <Image src={producto.image} style={{ width: '30rem', display: 'block', margin:'auto'}} />
                        <h3>{producto.name}</h3>
                        <h5>{producto.description}</h5>
                        <h5>{producto.price}</h5>
                        {
                            context.login &&
                            <Button variant="outline-success" onClick={comprar}>Comprar</Button>
                        }
                    </Container>
                </Jumbotron>
            }
            </ObjectContext.Consumer>
        )
    }



export default ProductoDetalle;