import React,{useState} from "react";
import { Card,Form} from 'react-bootstrap';
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import{useHistory} from 'react-router-dom'
import '../App.css';

function Registro(){
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',telefono:'', contraseña:'', confirmarContraseña:''});
    const [spinner, setSpinner] = useState(false);
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let contraseña=form.contraseña;    
        firebase.auth.createUserWithEmailAndPassword(email, contraseña)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                telefono: form.telefono,
                contraseña: form.contraseña,
                confirmarContraseña: form.confirmarContraseña,
                userId: data.user.uid
              })
               history.push("/login")
              

              .then((data)=>{
                    setSpinner(false);
                  console.log(data)
                  //history.push("/login");
              })
              .catch((err)=>{
                console.log(err)
                setSpinner(false);
                })
        })
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
        })
        
    }
    const handleChange = (e)=>{
  
      const target = e.target;
      const value = target.value
      const name = target.name;
  
  
      setForm({
          ...form,
          [name] : value});
      
    }
    return( /*Solo puede haber UN SOLO ELEMENTO en el return, puede ser un div, un form, un label pero SOLO UN ELEMENTO. */
       ['Light'].map((variant, idx) =>(
            <Card  bg={variant.toLowerCase()} key={idx} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} border="info" className="mb-2" style={{ width: '80rem', display: 'block', margin:'auto', borderColor:'black' }}>
               <Card.Title style={{ fontSize: '25px' }}>Registrarme</Card.Title>
                <Card.Body>
                 <Form onSubmit={handleSubmit}>
                    <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} change={handleChange}/>
                    <FormGroup label="Apellido" type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} change={handleChange}/>
                    <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
                    <FormGroup label="Telefono" type="text" placeholder="Ingrese su teléfono" name="telefono" value={form.telefono} change={handleChange}/>
                    <FormGroup label="Contraseña" type="password" placeholder="Cree una contraseña" name="contraseña" value={form.contraseña} change={handleChange}/>
                    <FormGroup label="ConfirmarContraseña" type="password" placeholder="Repita su contraseña" name="confirmarContraseña" value={form.confirmarContraseña} change={handleChange}/>
                <ButtonWithLoading  text="Registrase" loading={spinner}/>
                </Form>
                </Card.Body>
            </Card>
))
        )
    }

export default Registro;

/* puedo poner varios divs en el return ppero siempre DENTRO DE UN UNICO DIV EN EL RETURN
e incluso si al poner varios divs dentro de un unico div se me rompen los estilos, uso el fragment <> </>, es como un CONTENEDOR 
que despues no se transforma en un elemento HTML entonces no rompe las hojas de estilo */