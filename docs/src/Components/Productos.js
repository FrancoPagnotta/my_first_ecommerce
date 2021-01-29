import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Productos(props) { //De esta forma declaro un componente de tipo FUNCIÓN y la idea de este componente es que reciba toda la info de un producto que nos devuelve la API y la muestre en pantalla
  return ( 
     ['Light'].map((variant, idx) =>(
            <Card bg={variant.toLowerCase()} key={idx} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} border="info" className="mb-2" style={{ width: '60rem', display: 'block', margin:'auto'}}>
               <Card.Body style={{ width: '30rem', display: 'block', margin:'auto'}}>  
                <Image src={props.productos.data().image} fluid/>
                <Card.Title > {props.productos.data().name} </Card.Title>
                <Card.Text > {props.productos.data().price} </Card.Text>
                <Link to = {"/Productos/"+ props.productos.id}><Button variant="outline-dark" style={{ width: '30rem', display: 'block', margin:'auto'}}> Ver </Button></Link>
              </Card.Body>
            </Card>
))
        )
    }
   
          

export default Productos;

/*para recibir esa info va a usar PROPS o sea propiedades y a diferencia de las clases donde recibiamos las propiedades en this.props
acá en las funciones las recibimos directamente dentro de los () o sea como parametro de la función */
/*el componente PRODUCTOS al ser una FUNCIÓN y no una CLASE, no tiene metodos, por eso solo tiene un return con el JSX, no como un componente
de tipo CLASE que tiene un metodo render y adentro el return*/
