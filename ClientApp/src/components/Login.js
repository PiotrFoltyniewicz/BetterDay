import { useState } from "react"
function Login() {
    const [pass, setPass] = useState({ login: "", password: "" })
    return (
        <div>
            <input type="text"
                placeholder="Login"
                className="Login--login"
                name="Login"
                value="pass.login"
            />
            <input type="password"
                placeholder="password"
                className="Login--password"
                name="Login"
                value="pass.password"
            />
            <input type="submit" />
        </div>
    )
}
export default Login;