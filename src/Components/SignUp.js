import React from 'react'
import '../Styles/SignUp.css'

export default function SignUp() {
    return (
        <>
            <div className="webContainer">
                <div className="infoCard">
                    <h1 className="h1">Sign Up</h1>
                    <form>
                        <div className="input">
                            <div className="inputLabel">Email</div>
                            <input className="inputField" type="email" placeholder="Enter Email" />
                        </div>
                        <div className="input">
                            <div className="inputLabel">Password</div>
                            <input className="inputField" type="password" placeholder="Enter Password" />
                        </div>
                        <div className="input">
                            <div className="inputLabel">Password Confirm</div>
                            <input className="inputField" type="password" placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="infoSubmit">Enter</button>
                    </form>
                </div>
            </div>
        </>
    );
}
