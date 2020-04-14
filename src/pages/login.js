import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"

const Login = () => (
    <Layout>
        <div className="grid-container">
            <form className="usa-form">
                <fieldset className="usa-fieldset">
                    <legend className="usa-legend">Sign in</legend>
                    <span>or <a href="/about">create an account</a></span>

                    <label className="usa-label" htmlFor="username">Username or email address</label>
                    <input className="usa-input" id="username" name="username" type="text" autoCapitalize="off"
                           autoCorrect="off"/>

                    <label className="usa-label" htmlFor="password-sign-in">Password</label>
                    <input className="usa-input" id="password-sign-in" name="password" type="password"/>
                    {/* <p className="usa-form__note">
                                <a title="Show password" href="javascript:void(0);"
                                   className="usa-show-password"
                                   aria-controls="password-sign-in">Show password</a>
                            </p>*/}

                    <input className="usa-button" type="submit" value="Sign in"/>
                    <Link to={'/resetAccount'}
                          state={{reset: 'username'}}>Forgot username?</Link>
                    {/*<p><a href="javascript:void(0);" title="Forgot username">
                                    Forgot username?</a></p>
                                <p><a href="javascript:void(0);" title="Forgot password">
                                    Forgot password?</a></p>*/}
                </fieldset>
            </form>
        </div>
    </Layout>
);

export default Login;
