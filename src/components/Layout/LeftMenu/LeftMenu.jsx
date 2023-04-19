import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './LeftMenu.scss';

export function LeftMenu () {

	const { pathname } = useLocation();

	const isCurrentPage = (route) => {
		return route === pathname;
	};

	return (
		<div className="left-menu">
			<Menu secondary vertical fluid>
				<Menu.Item
					name='Home'
					icon="home"
					as={ Link } to="/"
					active={ isCurrentPage("/") }
				/>
				<Menu.Item
					name='Artists'
					icon="users"
					as={ Link } to="/artists"
					active={ isCurrentPage("/artists") }
				/>
				<Menu.Item
					name='Albums'
					icon="window maximize outline"
					as={ Link } to="/albums"
					active={ isCurrentPage("/albums") }
				/>
			</Menu>

			<Menu secondary vertical fluid>
				<Menu.Item
					name='New song'
					icon="plus"
					as={ Link } onClick={ () => console.log('New song to add') }
				/>
				<Menu.Item
					name='New artist'
					icon="plus"
					as={ Link } onClick={ () => console.log('New artist to add') }
				/>
				<Menu.Item
					name='New album'
					icon="plus"
					as={ Link } onClick={ () => console.log('New album to add') }
				/>
			</Menu>
		</div>
	);
}
