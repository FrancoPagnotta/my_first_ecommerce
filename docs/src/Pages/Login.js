import React, {useContext, useState} from "react";
import "./Registro.css";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import firebase from '../Config/firebase'
import FormGroup from '../Components/Forms/FormGroup'
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'
import AlertCustom from '../Components/Forms/AlertCustom'
import{useHistory} from 'react-router-dom'
import ObjectContext from "../Context/ObjectContext"

function Login(){
    const context = useContext(ObjectContext)
    const [form, setForm] = useState({email:'',contraseña:''});
    const [alert, setAlert] = useState({variant:'',text:''});
    const [spinner, setSpinner] = useState(false);
    const history = useHistory();
    const handleSubmit = (e)=>{
        console.log(form);
        e.preventDefault();
        setSpinner(true);
        let email=form.email;  
        let contraseña=form.contraseña;  
        firebase.auth.signInWithEmailAndPassword( email,contraseña)
        .then((data)=>{
            console.log("Usuario logueado",data)
            setSpinner(false);
            context.loginUser();
            setAlert ({variant:'success',text:'¡Bienvenido/a!'});
             history.push("/")
        })

        .catch((error)=>{
            console.log("Error",error)
            setAlert ({variant:'danger',text:'¡Ups, ha ocurrido un error!'});
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
            <Card  bg={variant.toLowerCase()} key={idx} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} border="info" className="mb-2" style={{ width: '80rem', display: 'block', margin:'auto', borderColor:'black'}}>
               <Card.Title style={{ fontSize: '25px' }}>Ingresar</Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                            <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
                            <FormGroup label="Contraseña" type="password" placeholder="Cree una contraseña" name="contraseña" value={form.contraseña} change={handleChange}/>
                            <ButtonWithLoading  text="Ingresar" loading = {spinner}/>
                    </Form>
                    <AlertCustom variant={alert.variant} text={alert.text}/>
                </Card.Body>
            </Card>
))
        )
    }


export default Login;
