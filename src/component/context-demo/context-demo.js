import React, { useContext, useState } from "react";

let UserDetailsContext = React.createContext(null);

export function MensClothing(){
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-warning p-5">
            <h4>Mens Clothing - {context.UserName}</h4>
        </div>
    )
}
export function HomeComponent(){
    const context = useContext(UserDetailsContext);

    return(
        <div className="bg-light text-dark p-3">
            <h3>Home - {context.UserName}</h3>
            <MensClothing/>
        </div>
    )

}
export function ContextDemo(){

    const [username , setUserName] = useState('');
    function  handleUserChange(e)
    {
    setUserName(e.target.value);
  

    }
    return(
        <div className="container-fluid bg-dark text-white p-3" style={{height:"300px"}}>
            <h2>Main Component</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserChange}/></dd>
            </dl>
         <UserDetailsContext.Provider value={{UserName:username}}>
           <HomeComponent/>
         </UserDetailsContext.Provider>
        </div>
    )

}