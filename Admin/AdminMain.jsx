import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Admin from './Admin.jsx'
// import "antd/dist/antd";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Admin />
    </BrowserRouter>
  </React.StrictMode>
)
