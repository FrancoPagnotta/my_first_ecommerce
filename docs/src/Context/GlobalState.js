import React,{Component} from 'react'
import ObjectContext from "./ObjectContext"

class GlobalState extends Component{
    state={
        login:localStorage.getItem("login")
    }
    loginUser = () => {
        this.setState({
            login:true
        })
        localStorage.setItem("login",true)
    }
    logoutUser = () =>{
        this.setState({
            login:false
        })
        localStorage.removeItem("login")
    }
    render(){
        return(
           <ObjectContext.Provider
                value={{
                    login:this.state.login,
                    loginUser:this.loginUser,
                    logoutUser:this.logoutUser
                }}
           >
                {this.props.children}

           </ObjectContext.Provider>
        )
    }
}

export default GlobalState