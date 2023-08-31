import {Route, Routes, Navigate} from 'react-router-dom';
import Recipe from "./pages/Recipe";
import NavBar from "./components/navigation/NavBar";
import {useContext} from "react";
import {AuthContext} from "./components/context/AuthContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurApp from "./pages/OurApp";
import Contacts from "./pages/Contacts";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
    const {isAuth} =useContext(AuthContext)

    return (
        <>
            <NavBar/>

            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/recipe-info/:id" element={isAuth ? <Recipe/>  : <Navigate to="/log-in"/>} />
                    <Route exact path="/about-us" element={<AboutUs/>} />
                    <Route exact path="/our-app" element={<OurApp/>} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                    <Route exact path="/log-in" element={<LogIn/>} />
                    <Route exact path="/sign-up" element={<SignUp/>} />
                    <Route exact path='*' element={<Home/>} />
                </Routes>

            </div>
        </>
    );
}

export default App;
