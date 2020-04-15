import React from "react";
import Layout from "../components/layout";
import {Link} from "gatsby"

export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    authenticateUser() {
        console.log();
    }

    render() {
        return (
            <Layout>
                <div className="grid-container">
                    <form className="usa-form">
                        <fieldset className="usa-fieldset">
                            <legend className="usa-legend">Sign in</legend>
                            <span>or <a href="/about">create an account</a></span>

                            <label className="usa-label" htmlFor="username">Username or email address</label>
                            <input className="usa-input" id="username" name="username" type="text" autoCapitalize="off"
                                   value={this.state.username}
                                   onChange={this.handleInputChange}
                                   autoCorrect="off"/>
                            <label className="usa-label" htmlFor="password-sign-in">Password</label>
                            <input className="usa-input" id="password-sign-in" name="password" type="password"
                                   value={this.state.password}
                                   onChange={this.handleInputChange}/>
                            <input className="usa-button" type="submit" onClick={this.authenticateUser()}
                                   value="Sign in"/>
                            <p><Link to={'/resetAccount'}
                                     state={{reset: 'username'}}>Forgot username?</Link></p>
                            <p><Link to={'/resetAccount'}
                                     state={{reset: 'password'}}>Forgot password?</Link></p>
                        </fieldset>
                    </form>
                </div>
            </Layout>
        )
    }
}
