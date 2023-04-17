import React from 'react';
import { Button } from 'semantic-ui-react';

export function RegisterForm (props) {

	const { openLoginForm, goBack } = props;

	return (
		<div style={ { backgroundColor: 'red' } }>
			<h1>Register Form</h1>
			<Button primary onClick={ openLoginForm }>Login</Button>
			<Button secondary onClick={ goBack }>Atrás</Button>
		</div>
	);
}
