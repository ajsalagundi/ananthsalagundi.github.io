import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<div className="text-orange-200 h-full w-1/3">
			<h1 className="w-full pl-20 pt-24">AS</h1>
			<ul className="pl-48 pt-32">
				<li className="">
					<span>Main</span>
				</li>
				<li className="">
					<span>About</span>
				</li>
				<li className="">
					<span>Projects</span>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
