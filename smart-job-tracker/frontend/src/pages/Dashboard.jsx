// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import KanbanBoard from '../components/KanbanBoard';
import Navbar from '../components/Navbar';
import { getJobs } from '../services/api';

function Dashboard() {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getJobs().then(data => {
			setJobs(data);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			<Navbar />
			<div className="p-6">
				<h1 className="text-2xl font-bold mb-4">Job Applications</h1>
				{loading ? <p>Loading...</p> : <KanbanBoard jobs={jobs} />}
			</div>
		</div>
	);
}

export default Dashboard;
