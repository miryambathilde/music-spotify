import React from 'react';
import { User } from '../../api';
import { AvatarUpdate } from '../../components/Profile';
import { Button } from 'semantic-ui-react';
import './Profile.scss';


const userData = new User();

export function Profile () {

	const { displayName, email, password } = userData.getMyUserData();

	return (
		<div className="profile">
			<h1>Configuration</h1>
			<div className="profile__block">
				<div>
					<AvatarUpdate />
					<span>{ displayName }</span>
				</div>
				<Button onClick={ () => console.log('Actualizar') }>Update</Button>
			</div>

			<div className="profile__block">
				<span>Email: { email }</span>
				<Button onClick={ () => console.log('Change email') }>Update</Button>
			</div>

			<div className="profile__block">
				<span>Password: ***** *****</span>
				<Button onClick={ () => console.log('Change password') }>Update</Button>
			</div>
		</div>
	);
}
