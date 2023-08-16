import React, {useState} from 'react';
import Slogan from "../components/slogantext/Slogan";
import sloganImg from '../../../frontend-eindopdracht/src/assets/healthy salad lady.png';
import Button from "../components/button/Button";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   async function handleSubmit(e) {
        e.preventDefault()

       try{
            await axios.post("https://localhost:8080/users",{
                username: name,
                email: email,
                password: password,
                role: ["user"],
            })
           navigate("/log-in")

       } catch (e) {
            console.error(e)
       }
    }

    return (
        <div>
            <Slogan
                title="Here U can sign up right now!"
                img={sloganImg} imgDescription="healthy salad lady!">
                <p>Do you want to use the recipe or calculator? Then you need to sign up!</p>
            </Slogan>

            <h2 className="content-title">Create an account</h2>
            <section className="redirect-styling"> <p>Create an account to enjoy all the</p>
                <p>Smech-it functions!</p>
            </section>

            <form className="form-styling" onSubmit={handleSubmit}>
                <label htmlFor="name-field">
                    <input
                        type="name"
                        id="name-field"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="email-field">
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                <div className="btn-signup-styling">
                    <Button> Sign Up </Button>
                </div>
            </form>
            <section className="redirect-styling-2"><p>Already have an account </p>
                <p> Click <Link to="/log-in">Here</Link>
                </p>
            </section>

        </div>
    );
};

export default SignUp;