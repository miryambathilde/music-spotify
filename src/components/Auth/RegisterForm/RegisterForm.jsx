import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import './RegisterForm.scss';

export function RegisterForm (props) {

	const { openLoginForm, goBack } = props;

	return (
		<div className="register-form">
			<h1>Create your free account and get access to millions of songs</h1>
			<Form>
				<Form.Input
					type="text"
					placeholder="Email"
					icon="mail inline"
				/>
				<Form.Input
					type="password"
					placeholder="Introduce your password"
					icon={ <Icon name="eye" link onClick={ () => console.log('Show password') }
					/>
					}
				/>
				<Form.Input
					type="text"
					placeholder="What should we call you?"
					icon="user circle outline"
				/>
				<Form.Button type="submit" primary fluid>Submit</Form.Button>
			</Form>

			<div className="register-form__options">
				<p onClick={ goBack }>Back</p>
				<p>Already have a Musicfy? <span onClick={ openLoginForm }>Sign in</span></p>
			</div>
		</div>
	);
}
