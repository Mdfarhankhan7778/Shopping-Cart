import { useState } from "react";
import { useEffect } from "react";

export function ShoppingCart(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
        var c = count+1;
        setCount(c);

    },[]);
    return(
        <div className="container m-4 p-4">
            <span className="bi bi-cart4"></span>{count}
        </div>
    )

}

export function EffectsComponentOne(){
    const [component,setComponent] = useState('');
    function AddClick(){
        alert("Cart Requested")
       setComponent(<ShoppingCart/>);
    }
    return(
     
        <div className="container-fluid mt-4">
         
            <div>
            <button onClick={AddClick}>Add to Cart</button>

            </div>
            <div>
                {component}
            </div>
        </div>
    )
}