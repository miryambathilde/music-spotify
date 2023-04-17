import React from 'react';
import { Button } from 'semantic-ui-react';

export function LoginForm (props) {

	const { openRegisterForm, goBack } = props;
	return (
		<div style={ { backgroundColor: 'red' } }>
			<h1>Login Form</h1>
			<Button primary onClick={ openRegisterForm }>Register</Button>
			<Button secondary onClick={ goBack }>Atras</Button>
		</div>
	);
}
