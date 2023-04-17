import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from "formik";
import { initialValues } from './RegisterForm.data';
import './RegisterForm.scss';

export function RegisterForm (props) {

	const { openLoginForm, goBack } = props;

	const formik = useFormik({
		initialValues: initialValues(),
		onSubmit: (formValue) => {
			console.log('Registro OK');
			console.log(formValue);
		}
	});

	return (
		<div className="register-form">
			<h1>Create your free account and get access to millions of songs</h1>
			<Form onSubmit={ formik.handleSubmit }>
				<Form.Input
					name="email"
					type="text"
					placeholder="Email"
					icon="mail outline"
					onChange={ formik.handleChange }
					value={ formik.values.email }
				/>
				<Form.Input
					name="password"
					type="password"
					placeholder="Introduce your password"
					icon={ <Icon name="eye"
						link onClick={ () => console.log('Show password') }
					/>
					}
					onChange={ formik.handleChange }
					value={ formik.values.password }
				/>
				<Form.Input
					name="userName"
					type="text"
					placeholder="What should we call you?"
					icon="user circle outline"
					onChange={ formik.handleChange }
					value={ formik.values.userName }
				/>
				<Form.Button type="submit" primary fluid>Submit</Form.Button>
			</Form>

			<div className="register-form__options">
				<p onClick={ goBack }>Go back</p>
				<p>Already have a Musicfy? <span onClick={ openLoginForm }>Sign in</span></p>
			</div>
		</div>
	);
}
