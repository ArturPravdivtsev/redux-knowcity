import React from 'react';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.onEmalChange = this.onEmalChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmalChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    render() {
        return (
            <div className="auth">
                <h3>Sign In</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            value={this.props.email}
                            onChange={this.onEmalChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.onPasswordChange} 
                        />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}