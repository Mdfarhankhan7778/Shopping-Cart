import { useEffect, useState } from "react"

export function Login(){
    useEffect(()=>{
           alert('Login Component Requested and will mount');
           return()=>{
            alert('Login Component unmounted');

           }
    },[]);
    return(
        <div>
            <h2>User Login</h2>
        </div>
    )
}
export function Register()
{
    useEffect(()=>{
        alert('Register Component Requested and will mount');
        return()=>{
         alert('Register Component unmounted');

        }
 },[]);
    return(
        <div>
            <h2>Register</h2>
        </div>
    )
}

export function EffectsComponent(){
    const[component,setComponent] = useState('');
    function LoginClick(){
        setComponent(<Login/>);
    }
    function RegisterClick(){
        setComponent(<Register/>)
    }
    return(
        <div>
            <button onClick={LoginClick}>Login</button>
            <button onClick={RegisterClick}>Register</button>
            <hr/>
        {component}
        </div>
    )
}