import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { CookiesProvider } from 'react-cookie';
import { UserProvider } from './context/userContext'

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
  <UserProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </UserProvider>
  </CookiesProvider>
);
