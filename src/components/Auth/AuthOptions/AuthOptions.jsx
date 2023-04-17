import React from 'react';
import { Button } from 'semantic-ui-react';
import './AuthOptions.scss';

export function AuthOptions (props) {

	const { openLoginForm, openRegisterForm } = props;
	return (
		<div className="auth-options">
			<h1>Millions of free songs on Musicfy</h1>
			<Button className="register" onClick={ openRegisterForm }>Sign up for free</Button>
			<Button className="login" onClick={ openLoginForm }>Sign in</Button>
		</div>
	);
}
