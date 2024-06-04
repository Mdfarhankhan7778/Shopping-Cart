
import { Formik , Field , ErrorMessage,Form} from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
//import { response } from "express";
export function CrudCreate(){


    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [idError,setIdError] = useState('');

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:8080/products'
        })
        .then(response=>{
            setProducts(response.data);
        })

    },[]);
    function VerifyId(e)
    {
        var id = parseInt(e.target.value);
        for(var product of products){
            if(product.ProductId==id){
                setIdError('Product ID Taken - Try Another');
                break;
            }
            else{
                setIdError('Product ID Available');
            }
        }
     
    }
   
    return(
        <div className="container-fluid">
            <h2>Add New Product</h2>
            <Formik
            initialValues={{
                ProductId:0,
                Name:'',
                Price:0,
                Stock:false


            }}
            onSubmit={
                (values)=>{
                    axios({
                        method:'Post',
                        url:'http://127.0.0.1:8080/addproducts',
                        data: values
                    }).then(()=>{
                        alert("Product Registered");
                        navigate("/products");

                    })
                    

                
            }

            
        }
        
            >
                {
                    <Form>
                        <dl>
                            <dt>Product Id</dt>
                            <dd><Field name="ProductId" onKeyUp={VerifyId} type="number" /></dd>
                            <dd>{idError}</dd>
                            <dt>Name</dt>
                            <dd><Field name="Name" type="text" /></dd>
                            <dt>Price</dt>
                            <dd><Field name="Price" type="number" /></dd>
                            <dt>Stock</dt>
                            <dd className="form-switch"><Field className="form-check-input" name="Stock" type="checkbox" /> Available</dd>
                            
                        </dl>
                        <button className="btn btn-primary">Add Product</button>
                        <Link className="ms-2" to="/products">View Products </Link>
                    </Form>
                }

            </Formik>

        </div>
    )
}