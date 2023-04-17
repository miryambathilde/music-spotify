import * as Yup from 'yup';

export function initialValues () {
	return {
		email: "",
		password: "",
		userName: ""
	};
}

export function validationSchema () {
	return Yup.object({
		email: Yup.string().email("Email no valid").required("Email is required"),
		password: Yup.string().required("Password is required"),
		userName: Yup.string().required("Username is required"),
	});
}