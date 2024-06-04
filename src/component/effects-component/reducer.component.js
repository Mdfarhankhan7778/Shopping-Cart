import { useReducer } from "react";
import { useState } from "react";
import { useChangeCase } from "../../hooks/changecase.hook";
import { useCaptcha } from "../../hooks/captcha.hook";


let initialState = {count:0};

function reducer(state,action){
    switch(action.type){
        case "join":
            return {count: state.count + 1};
            case "exit":
                return {count: state.count - 1};
    }
}

export  function ReducerDemo(){

    const [state,dispatch] = useReducer(reducer,initialState);
    const [user,setUser] = useState();
    const msg = useChangeCase("welCOMe to ReACT");
    const captcha = useCaptcha();

    function JoinClick(){
        dispatchEvent({type:'john'});
    }

    function ExitClick(){
        dispatchEvent({type:'exit'});
    }
  return(
    <div className="container-fluid">
        <h1>{msg}</h1>
        <h2>Live <span className="bi bi-youtube"></span>Video Streaming</h2>
        <h4>{state.count} Watching</h4>
        <dl>
            <dt>Your ID</dt>
            <dd><input type="text" /></dd>
            <dt>Verify Code</dt>
            <dd>
                {captcha}
            </dd>
        </dl>
        <button onClick={JoinClick} className="btn btn-primary me-2">Join</button>
        <button onClick={ExitClick} className="btn btn-danger">Exit</button>
    </div>

  )
}