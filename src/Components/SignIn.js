import React from 'react'
import '../Styles/SignIn.css'

export default function SignIn() {
    return (
        <>
            <div className="webContainer">
                <div className="infoCard">
                    <h1 className="h1">Sign in</h1>
                    <form>
                        <div className="input">
                            <div className="inputLabel">Email</div>
                            <input className="inputField" type="email" placeholder="Enter Email" />
                        </div>
                        <div className="input">
                            <div className="inputLabel">Password</div>
                            <input className="inputField" placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="infoSubmit">Enter</button>
                    </form>
                </div>
            </div>
        </>
    );
}
