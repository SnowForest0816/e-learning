import React from 'react';

function Login() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form className="text-center border border-primary p-5" submit="loginUser">
                    <input
                        type="text"
                        id="email"
                        className="form-control mb-5"
                        placeholder="Email"
                        v-model="login.email"
                        required
                    />

                    <input
                        type="password"
                        id="password"
                        className="form-control mb-5"
                        placeholder="Password"
                        v-model="login.password"
                        required
                    />

                    <p>
                        Dont have an account??<router-link to="/register"
                        >click here</router-link
                        >
                    </p>

                    <center>
                        <button className="btn btn-primary btn-block w-75 my-4" type="submit">
                            Sign in
                        </button>
                    </center>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;
