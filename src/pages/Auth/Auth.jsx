import React, { useState } from 'react';
import { AuthOptions, RegisterForm, LoginForm } from '../../components/Auth';
import "./Auth.scss";

export default function Auth () {

	const [ typeForm, setTypeForm ] = useState(null);

	const openLoginForm = () => setTypeForm("login");
	const openRegisterForm = () => setTypeForm("register");
	const goBack = () => setTypeForm(null);

	const renderForm = (() => {
		if (typeForm === "login") {
			return <LoginForm openRegisterForm={ openRegisterForm } goBack={ goBack } />;
		}
		if (typeForm === "register") {
			return <RegisterForm openLoginForm={ openLoginForm } goBack={ goBack } />;
		}
		return <AuthOptions openLoginForm={ openLoginForm } openRegisterForm={ openRegisterForm } />;
	});
	return (
		<div>
			{ renderForm() }
		</div>
	);
}
