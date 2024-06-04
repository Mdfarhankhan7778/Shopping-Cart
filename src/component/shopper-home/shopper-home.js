
import { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
export function ShopperHome()
{
    const [cookies , setCookie , removeCookie] = useCookies();
    const navigate = useNavigate();
   useEffect(()=>{
        if(cookies["userid"]==undefined)
        {
            navigate("/login");
        }

    },[]);
    function SignoutClick(){
        removeCookie("userid");
        navigate("/login");

    }

    return(
        <div className="container-fluid d-flex justify-content-between">
           
            <div>
            <div className="d-flex justify-content-between">
                <div>
                    <img src="electronics.jpg" style={{width:'300px',height:'300px'}}/>
                </div>
                <div>
                    <img src="men'sclothing.jpg" style={{width:'300px',height:'300px'}} />
                </div>
                <div>
                    <img src="women'sclothing.jpg" style={{width:'300px',height:'300px'}} />
                </div>
                <div>
                    <img src="jwelery.jpg" style={{width:'300px',height:'300px'}} />
                </div>

            </div>

        </div>
        <div>
            <h4>Hello - {cookies["userid"]}</h4>
             <button onClick={SignoutClick} className="btn btn-link">Signout</button> 
        </div>
        </div>
    )
}