import React,{Component} from "react";
import Registro from "./Pages/Registro";
import Menu from "./Components/Menu"
import ProductoDetalle from "./Pages/ProductoDetalle";
import Home from "./Pages/Home"
class App extends Component{
    constructor(){
        super();
        this.state={
            opciones:["Login","Registro"],
            titulo:"React App"
        }
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate App",nextProps,nextState)
    }
    
    handleClick = ()=>{
        console.log("handleClick")
        this.setState({
            opciones:["Inicio"]
        })
    }
    render(){
        return(
            <div>
                
                <button onClick={this.handleClick}>Login</button>
                <Menu data={this.state.opciones}/>
                <Home/>
            </div>
        )
    }
}

export default App;

