import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from "formik";
import { Auth } from '../../../api';
import { initialValues, validationSchema } from './RegisterForm.data';
import './RegisterForm.scss';

const auth = new Auth();

export function RegisterForm (props) {

	const { openLoginForm, goBack } = props;
	const [ showPassword, setShowPassword ] = useState(false);

	const onShowOrHiddenPassword = () => setShowPassword(prevState => !prevState);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			/* console.log('Registro OK');
			console.log(formValue); */
			try {
				await auth.register(formValue.email, formValue.password);
			} catch (error) {
				console.error(error);
			}
		}
	});

	console.log(formik.errors);

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
					error={ formik.errors.email }
				/>
				<Form.Input
					name="password"
					type={ showPassword ? "text" : "password" }
					placeholder="Introduce your password"
					icon={ <Icon
						name={ showPassword ? "eye slash" : "eye" }
						link onClick={ onShowOrHiddenPassword }
					/>
					}
					onChange={ formik.handleChange }
					value={ formik.values.password }
					error={ formik.errors.password }
				/>
				<Form.Input
					name="userName"
					type="text"
					placeholder="What should we call you?"
					icon="user circle outline"
					onChange={ formik.handleChange }
					value={ formik.values.userName }
					error={ formik.errors.userName }
				/>
				<Form.Button
					type="submit"
					primary fluid loading={ formik.isSubmitting }

				>Submit</Form.Button>
			</Form>

			<div className="register-form__options">
				<p onClick={ goBack }>Go back</p>
				<p>Already have a Musicfy? <span onClick={ openLoginForm }>Sign in</span></p>
			</div>
		</div>
	);
}
