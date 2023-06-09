import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './Routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
