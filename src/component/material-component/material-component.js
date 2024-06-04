import { Button , TextField } from "@mui/material";
//import  Button  from "@mui/material/Button";


export function MaterialComponent(){

    function handleTextChange(e)
    {
        alert(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Bootstrap Button</h2>
            <button className="btn btn-primary">Register</button>
            <h2>React MUI Button</h2>
            <Button>Register</Button>
            <Button variant="contained" color="success">Register</Button>
            <br/>
            <br/>

            <TextField onChange={handleTextChange} label=" Your Email" variant="standard"></TextField>

        </div>

    )
}