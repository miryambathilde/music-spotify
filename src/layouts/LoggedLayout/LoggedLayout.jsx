import React from 'react';
import { LeftMenu } from '../../components/Layout';
import './LoggedLayout.scss';


export function LoggedLayout (props) {
	console.log(props);
	const { children } = props;

	return (
		<div className="logged-layout">
			<div className="logged-layout__content">
				<div className="logged-layout__left-menu">
					<LeftMenu />
				</div>
				<div className="logged-layout__children-content">
					<div className="logged-layout__top-bar">
						<p>TOP BAR</p>
					</div>
					<div>{ children }</div>
				</div>
			</div>
			<div className="logged-layout__footer">
				<p>Footer</p>
			</div>
		</div>
	);
}