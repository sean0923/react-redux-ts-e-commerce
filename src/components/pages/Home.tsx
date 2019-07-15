import React from 'react';
import './home/home.styles.scss';

const contents = [
	{ title: 'HATS' },
	{ title: 'JACKETS' },
	{ title: 'SNEAKERS' },
	{ title: 'WOMEN' },
	{ title: 'MEN' },
];

function Home() {
	return (
		<div className="homepage">
			<div className="directory-menu">
				{contents.map(({ title }) => {
					return (
						<div className="menu-item" key={title}>
							<div className="content">
								<h1 className="title">HATS</h1>
								<div className="subtitle">SHOW NOW</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export { Home };
