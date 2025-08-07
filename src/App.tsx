import './App.css'
import Login from "./pages/auth/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            <ToastContainer position="top-center" autoClose={3000}/>
        </BrowserRouter>
    )
}

export default App
