import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={store}>
   <ToastContainer
position="top-right"
autoClose={5000}
closeOnClick
pauseOnHover
theme="dark"
/>
{/* Same as */}
<ToastContainer />
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
