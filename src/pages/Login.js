import React from 'react'
import NavBar from '../components/NavBar';

function Login() {
  return (
    <>
    <header>
       <NavBar />
    </header>
    <main>
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username</label>
                <input id="username" type="text" name="username" placeholder="Username"/>
            </div>
            <br/>
            <div>
                <label for="password" type="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <button type="submit">submit</button>
        </form>
    </main>
    </>
  );
};

export default Login