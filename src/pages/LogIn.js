import React, {useContext, useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from "../../../frontend-eindopdracht/src/assets/blue lady first page.png";
import Button from "../components/button/Button";
import "./pages.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../components/context/AuthContext";

const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: name,
                password: password,
            })
            console.log( result.data);
            login(result.data.accessToken);

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <Slogan
                title="Login with SMech-it!"
                img={sloganImg} imgDescription="Smech-it">
                <p>Please log in to use the Smech-it recipe and calculator functions.</p>
            </Slogan>
            <h2 className="content-title">Log in</h2>
            <section className="redirect-styling"><p>Don't have an account </p>
                <p> Click <Link to="/sign-up">Here</Link></p>

            </section>
            <form className="form-styling" onSubmit={handleSubmit}>
                <label htmlFor="username-field">
                    <input
                        type="name"
                        id="name-field"
                        name="name"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="password-field">
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className="btn-login-styling">
                    <Button type="submit"
                    >Log in</Button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;