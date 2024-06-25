import React, { useState } from 'react';
import './RegisterForm.css';

export const RegisterForm = () => {
    const [userName, setUserName] = useState("");
    const [userDOB, setUserDOB] = useState("");
    const [usersDetails, setUserDetails] = useState("");

    const getUserName = (event) => {
        setUserName(event.target.value);
    };

    const getUserDOB = (event) => {
        setUserDOB(event.target.value);
    };

    const CalculateAge = (dob) => {
        const birthDate = new Date(dob);
        const todayDate = new Date();
        let age = todayDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = todayDate.getMonth() - birthDate.getMonth();
        const dayDiff = todayDate.getDate() - birthDate.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age -= 1;
        }
        return age;
    };

    const getUserDetails = (e) => {
        e.preventDefault();
        const age = CalculateAge(userDOB);
        setUserDetails(`${userName}, ${age}`);
        console.log(`User Details Updated: ${userName}, ${age}`); // Debug statement
    };

    return (
        <div className='class-action'>
            <div>
                <form className="form-action" onSubmit={getUserDetails}>
                    <h3>Check your Age ???</h3>
                    <div className="form-class">
                        <label>Enter your name</label>
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userName}
                            onChange={getUserName}
                        />
                        <br />
                        <br />
                        <label>Enter your DOB</label>
                        <input
                            type='date'
                            value={userDOB}
                            onChange={getUserDOB}
                        />
                        <br />
                        <br />
                        <button type='submit' className="btn">Check your age</button>
                    </div>
                </form>
            </div>
            {usersDetails && (
                <h3 className="res">Awesome {usersDetails} Years Old YOU... !!!</h3>
            )}
        </div>
    );
};
