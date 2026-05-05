// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
			<Link to="/" className="font-bold text-xl">Smart Job Tracker</Link>
			<div className="space-x-4">
				<Link to="/" className="hover:underline">Dashboard</Link>
				<Link to="/add" className="hover:underline">Add Job</Link>
			</div>
		</nav>
	);
}

export default Navbar;
