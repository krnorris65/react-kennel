import React, { useRef } from 'react'

const Login = props => {
    const email = useRef()
    const password = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        const userInfo = {
            email: email.current.value,
            password: password.current.value
        }

    }

    return (
        <form onSubmit={handleLogin}>
            <fieldset>
                <h3>Please sign in</h3>
                <div className="formgrid">
                    <input ref={email} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <label htmlFor="inputEmail">Email address</label>

                    <input ref={password} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <button type="submit">
                    Sign in
              </button>
            </fieldset>
        </form>
    )
}

export default Login