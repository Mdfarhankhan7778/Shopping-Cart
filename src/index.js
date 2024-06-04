import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { ShopperIndex } from './component/shopper-index/shopper-index';
 import { CookiesProvider } from 'react-cookie';
 import { MaterialComponent } from './component/material-component/material-component';
 import { EffectsComponent } from './component/effects-component/effects-component';
import { EffectsComponentOne } from './component/effects-component/effects';
 import { ReducerDemo } from './component/effects-component/reducer.component';
 import { ContextDemo } from './component/context-demo/context-demo';
import { CrudIndex } from './crud-operation/crud-index';
import { ShopperJewelery } from './component/shopper-jewelery/shopper-jewelery';
import { ShopperLogin } from './component/shopper-login/shopper-login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ShopperIndex/>
    
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
