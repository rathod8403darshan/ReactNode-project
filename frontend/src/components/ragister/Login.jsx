import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id="mainRagister">
    <div class="container">
        <header>
            <h1>
                <a href="/">
                    <img 
                        src="http://tfgms.com/sandbox/dailyui/logo-1.png"
                        alt="Authentic Collection"
                        style={{maxWidth:"200px"}}
                    />
                </a>
            </h1>
        </header>
        <h1 class="text-center fs-1" style={{fontSize:'50px'}}>Login</h1>
        <form class="registration-form">
            
            <label>
                <span class="label-text">Email</span>
                <input type="text" name="email" />
            </label>
            <label class="password">
                <span class="label-text">Password</span>
                <button
                    class="toggle-visibility"
                    title="toggle password visibility"
                    tabindex="-1"
                >
                    <span class="glyphicon glyphicon-eye-close"></span>
                </button>
                <input type="password" name="password" />
            </label>
           
            <div className="flex justify-between mt-3">
                        <Link to={"/ragister"} className="border-gray-600 hover:bg-gray-600 hover:text-white border-2 py-2 px-4 rounded-md" name="register">
                             Register
                        </Link>
                        <Link to={"/"} className="border-gray-600 hover:bg-gray-600 hover:text-white border-2 py-2 px-4 rounded-md" name="register">
                           Login
                        </Link>
                    </div>
        </form>
    </div>
</div>
  )
}

export default Login