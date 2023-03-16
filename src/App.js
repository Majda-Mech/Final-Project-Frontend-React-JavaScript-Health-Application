import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AboutUs from "./pages/AboutUs";
import OurApp from "./pages/OurApp";
import Contacts from "./pages/Contacts";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Footer from "../../../../WebstormProjects/frontend-eind-opdracht-calorie-health-app/src/components/footer/Footer";
import {AuthContext} from "./components/context/AuthContext";
import {useContext} from "react";

function App() {

  const {isAuth} =useContext(AuthContext)

  return (
<>
  <NavBar/>
  <div className="content">
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/recipe-info/:id">
        {isAuth? <Recipe/> : <Redirect to="/log-in"/>}
      </Route>
      <Route path="/about-us">
        <AboutUs/>
      </Route>
      <Route path="/our-app">
        <OurApp/>
      </Route>
      <Route path="/contacts">
        <Contacts/>
      </Route>
      <Route path="/log-in">
        <LogIn/>
      </Route>
      <Route path="/sign-up">
        <SignUp/>
      </Route>
    </Switch>
</div>
  <Footer/>
</>
  );
}

export default App;
