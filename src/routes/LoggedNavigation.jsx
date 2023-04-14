import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import { Home, Artists, Artist, Albums, Album, Profile } from '../pages';

export function LoggedNavigation () {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Home /> }></Route>
				<Route path="/artists" element={ <Artists /> }></Route>
				<Route path="/artist/:id" element={ <Artist /> }></Route>
				<Route path="/albums" element={ <Albums /> }></Route>
				<Route path="/album/:id" element={ <Album /> }></Route>
				<Route path="/profile" element={ <Profile /> }></Route>
			</Routes>
		</Router>
	);
}
