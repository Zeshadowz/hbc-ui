import './App.css'
import LoginPage from "./pages/auth/LoginPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
            <ToastContainer position="top-center" autoClose={3000}/>
        </BrowserRouter>
    )
}

export default App
