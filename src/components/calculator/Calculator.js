import React, {useState} from 'react';
import "./Calculator.css"
import Button from "../button/Button";

const Calculator = () => {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState('');
    const [bmrCalc, setBmrCalc] = useState('');

    function handleSubmit(e) {
        setError("")

        e.preventDefault()

        if (age === '' || weight === '' || gender === '' || height === '') {
            setError("Please fill in all the fields")
        } else {
            if (gender === '1') //Female
            {
                setBmrCalc(655 + (9.563 * weight) + (1.850 * height) - (4.676 * age))
            } else if (gender === '2') //Male
            {
                setBmrCalc(66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age))
            }
        }
    }

    return (
        <div>
            <h2 className="calculator-title">Calories calculator</h2>
            <div className="calculator-styles">
                <form onSubmit={handleSubmit}>
                    <label className="label-styling" htmlFor="age-field"> Age
                        <input
                            type="age"
                            id="age-field"
                            name="age"
                            placeholder="15"
                            value={age}
                            min={0}
                            max={120}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <div>
                        <label htmlFor="gender-field">Gender
                            <input type="radio"
                                   checked={gender === '2'}
                                   onChange={(e) => setGender(e.target.value)}
                                   className="genderM"
                                   name="gender" value="2"/>Male

                            <input type="radio"
                                   checked={gender === '1'}
                                   onChange={(e) => setGender(e.target.value)}
                                   className="genderF"
                                   name="gender" value="1"/>Female
                        </label>
                        <div>
                            <label htmlFor="height-field">Height
                                <input type="height-field"
                                       value={height}
                                       onChange={(e) => setHeight(e.target.value)}
                                       name="height"
                                       placeholder="180"
                                /> CM
                            </label>
                        </div>
                        <div>
                            <label htmlFor="weight-field">Weight
                                <input type="weight-field"
                                       value={weight}
                                       onChange={(e) => setWeight(e.target.value)}
                                       name="weight"
                                       placeholder="85"
                                /> KG
                            </label>
                        </div>
                        <div className="btn-calc-styling">
                            <Button
                                type="submit"
                                changeHandler={handleSubmit}
                                styleCompId={"calc-btn-color"}
                            >calculate</Button>
                        </div>
                    </div>
                </form>

                <div className="calculation-field">

                    <p>{error}</p>
                    <p>Maintain weight: {Math.round(bmrCalc)}</p>
                    <p>Mild weight loss: {Math.round(bmrCalc * 0.9)} </p>
                    <p>Weight loss: {Math.round(bmrCalc * 0.8)}</p>
                    <p>Extreme weight loss: {Math.round(bmrCalc * 0.61)}</p>

                </div>
            </div>


        </div>
    );
};

export default Calculator;