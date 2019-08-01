import React from 'react';
import './home/home.styles.scss';
import { Directory } from './home/Directory';

function Home() {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
}

export { Home };
