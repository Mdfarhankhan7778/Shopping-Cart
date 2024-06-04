
import { BrowserRouter , Routes , Route, Link} from "react-router-dom";
import { ShopperHome } from "../shopper-home/shopper-home";
import { ShopperJewelery } from "../shopper-jewelery/shopper-jewelery";
import { ShopperCategory } from "../shopper-category/shopper-category";
import { ShopperDetails } from "../shopper-details/shopper-details";
import { ShopperRegister } from "../shopper-register/shopper-register";
import { ShopperLogin } from "../shopper-login/shopper-login";
import { ShopperInvalid } from "../shopper-invalid/shopper-invalid";
import { CrudIndex } from "../../crud-operation/crud-index";
import { CrudCreate } from "../../crud-operation/crud-create";
import { CrudDetails } from "../../crud-operation/crud-details";
import { CrudEdit } from "../../crud-operation/crud-edit";
export function ShopperIndex(){  // shopper index keep in index.js
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex justify-content-between  text-dark p-1">
                
                    <div>
                        <h2>Shopper.</h2>
                    </div>
                    <nav className="d-flex">
                        <div className="me-3"><Link className="btn" to="home">Home</Link></div>
                          <div className="me-3"><Link className="btn" to="products">Products</Link></div> 

                         <div className="me-3"><Link className="btn" to="register">Register</Link></div> 
                         <div className="me-3"><Link  className="btn" to="category/men's clothing">Men's Fashion</Link></div>
                        <div className="me-3"><Link  className="btn" to="category/women's clothing">Women's Fashion</Link></div> 
                        <div className="me-3"><Link className="btn" to="category/jewelery">Jewelery</Link></div>
                        <div className="me-3"><Link   className="btn" to="category/electronics">Electronics</Link></div>
                    </nav>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
            <div className="mt-2 bg-dark text-white text-center p-1">
                HAPPY HOLIDAY DEALS ON EVERYTHING
            </div>
            <div className="mt-3">
                <Routes>
                    <Route path="/" element={<ShopperHome />} />
                    <Route path="home" element={<ShopperHome />} />
                    <Route path="jewelery" element={<ShopperJewelery />} />
                     <Route path="category/:catname" element={<ShopperCategory />} />
                    <Route path="details/:id" element={<ShopperDetails />} />
                    <Route path="register" element={<ShopperRegister />} />
                    <Route path="login" element={<ShopperLogin />} />
                    <Route path="invalid" element={<ShopperInvalid />} />
                    <Route path="products" element={<CrudIndex />} />
                    <Route path="NewProduct" element={<CrudCreate />} />
                    <Route path="cruddetails/:id" element={<CrudDetails />} />
                    <Route path="crudedit/:id" element={<CrudEdit />} /> 
                     

                </Routes>

            </div>
            </BrowserRouter>

        </div>
    )
}