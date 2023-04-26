import React from 'react';
import { Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { User } from '../../../api';
import { initialValues, validationSchema } from './DisplayNameUpdateForm.data';

const userController = new User();
export function DisplayNameUpdateForm (props) {

	const { onClose } = props;
	const { displayName } = userController.getMyUserData();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema,
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				await userController.updateDisplayName(formValue.displayName);
				onClose();
			} catch (error) {
				throw error;
			}
		}
	});
	return (
		<Form onSubmit={ formik.handleSubmit }>
			<Form.Input
				name="displayName"
				placeholder="Name and surname"
				value={ formik.values.displayName }
				onChange={ formik.handleChange }
				error={ formik.errors.displayName }
			/>
			<Form.Button type="submit" primary fluid loading={ formik.isSubmitting } >
				Update user name
			</Form.Button>
		</Form>
	);
}
