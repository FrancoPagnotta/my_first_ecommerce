import React, {Component} from "react";
import "./Home.css";
import Productos from "../Components/Productos";
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../Config/firebase'

const styles = {
    divAlert:{
        position:'fixed',
         left:'20px'
    }
}
class Home extends Component{
    constructor(){
        super();
        this.state={
            productos:[],
            loading:true
        }
    }
    componentDidMount(){
       /* getProductos()
        .then(data=>{
            console.log("Data",data)
            this.setState({
                productos:data.data,
                loading:false
            })*/
            firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })
    }

    render(){
        if(this.state.loading){
            return(
                <div style={styles.divAlert}>
                        <Spinner animation="border" size="sm"/>
                </div>
            )
        }
        else{
            return(
                <div> 
                    {this.state.productos.map(producto=><Productos key={producto.id} productos={producto}/>)} 
                </div>
            )
        }
    }
}
export default Home;

//La variable producto tiene un Json con toda la información del producto
//ojo que Productos no es lo mismo que productos, no confundir, Productos es un COMPONENTE y productos es la propiedad de ese componente
//llamo al componente "Productos" y le voy a pasar en su propiedad "productos" el resultado de cada iteracción "producto" o sea los elementos del array que contiene el Json que me enia la API
/*como dije la variable "producto" tiene un Json con toda la info del producto contenida en las iteracciones del array o sea por ejemplo en la iteracción "id":"1" contiene tal información, 
en la iteracción "id":"2" contiene otra información*/
