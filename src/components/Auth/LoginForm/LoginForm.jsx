import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from "formik";
import { Auth } from '../../../api';
import { initialValues, validationSchema } from './LoginForm.data';
import "./LoginForm.scss";

const auth = new Auth();

export function LoginForm (props) {

	const { openRegisterForm, goBack } = props;

	const [ showPassword, setShowPassword ] = useState(false);

	const onShowOrHiddenPassword = () => setShowPassword(prevState => !prevState);


	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			console.log('Formulario login enviado');
			console.log(formValue);
			try {
				await auth.login(formValue.email, formValue.password);
			} catch (error) {
				console.error(error);
			}
		}
	});

	return (
		<div className="login-form">
			<h1>Music for everyone</h1>
			<Form onSubmit={ formik.handleSubmit }>
				<Form.Input
					name="email"
					type="text"
					placeholder="Introduce your email"
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
				<Form.Button
					type="submit"
					primary fluid loading={ formik.isSubmitting }

				>Submit</Form.Button>
				<div className="login-form__options">
					<p onClick={ goBack }>Go back</p>
					<p>Don't have an account yet? <span onClick={ openRegisterForm }>Sign up</span></p>
				</div>

			</Form>
		</div>
	);
}
