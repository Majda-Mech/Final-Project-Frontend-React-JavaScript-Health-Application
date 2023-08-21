import React, {useEffect, useState} from 'react';
import "./UserData.css"
import axios from "axios";

const UserData = () => {

    const [profileData, setProfileData] = useState({});

    useEffect(() => {

        async function fetchProfileData() {

            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`http://localhost:8081/users`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfileData(result.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <div>
            <section>
                <h2>Welcome, {profileData.username}.</h2>
                <div className="userdata-styling">
                    <p>we hope you enjoy your meal and achieve your goals!</p>
                </div>
            </section>
        </div>
    );
};

export default UserData;