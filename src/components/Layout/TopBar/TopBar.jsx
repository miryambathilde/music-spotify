import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth, User } from '../../../api';
import { defaultUser } from '../../../assets';
import './TopBar.scss';


export function TopBar () {

	const auth = new Auth();
	const user = new User();

	console.log(user.getMyUserData());

	const navigate = useNavigate();
	const userData = user.getMyUserData();

	const displayName = userData.displayName || 'Mi cuenta';
	const avatar = userData.photoURL || defaultUser;

	const goBack = () => {
		navigate(-1);
	};


	return (
		<div className="top-bar">
			<Icon
				className="top-bar__back"
				name="angle left"
				link onClick={ goBack } />

			<div className="top-bar__right">
				<Link to="/profile">
					<Image src={ avatar } avatar />
					<span>{ displayName }</span>
				</Link>
				<Icon name="power" onClick={ auth.logout } link />
			</div>
		</div>
	);
}
