import React from 'react';
import { Icon, Progress } from 'semantic-ui-react';
import './Player.scss';

export function Player () {

	const isPlaying = false;

	return (
		<div className="player">
			<Icon name={ isPlaying ? 'pause circle outline' : "play circle outline" } />

			<Progress progress="value" value={ 30 } total={ 100 } size="tiny" />
		</div>
	);
}
