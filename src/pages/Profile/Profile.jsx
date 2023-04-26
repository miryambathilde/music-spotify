import React, { useState } from 'react';
import { User } from '../../api';
import { AvatarUpdate } from '../../components/Profile';
import { BasicModal } from '../../components/Shared';
import { Button } from 'semantic-ui-react';
import './Profile.scss';


const userData = new User();

export function Profile () {

	const { displayName, email, password } = userData.getMyUserData();

	const [ showModal, setShowModal ] = useState(false);
	const [ contentModal, setContentModal ] = useState(null);
	const [ titleModal, setTitleModal ] = useState('');

	const onCloseModal = () => {
		setShowModal(false);
		setContentModal(null);
		setTitleModal('');
		console.log('close modal');
	};

	const openFormModal = (type) => {
		if (type === 'displayName') {
			setContentModal(<h1>Form Display Name</h1>);
			setTitleModal('Update user name');
		}
		if (type === 'email') {
			setContentModal(<h1>Form Email</h1>);
			setTitleModal('Update email');
		}
		if (type === 'password') {
			setContentModal(<h1>Form password</h1>);
			setTitleModal('Update password');
		}

		setShowModal(true);
	};

	return (
		<>
			<div className="profile">
				<h1>Configuration</h1>
				<div className="profile__block">
					<div>
						<AvatarUpdate />
						<span>{ displayName }</span>
					</div>
					<Button onClick={ () => openFormModal('displayName') }>Update</Button>
				</div>

				<div className="profile__block">
					<span>Email: { email }</span>
					<Button onClick={ () => openFormModal('email') }>Update</Button>
				</div>

				<div className="profile__block">
					<span>Password: ***** *****</span>
					<Button onClick={ () => openFormModal('password') }>Update</Button>
				</div>
			</div>
			<BasicModal
				show={ showModal }
				onClose={ onCloseModal }
				title={ titleModal }
				children={ contentModal }
			/>
		</>
	);
}
