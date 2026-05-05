// JobCard.jsx
// Displays a single job application card
import React from 'react';

function JobCard({ job }) {
	return (
		<div className="bg-white shadow rounded p-4 mb-4">
			<h3 className="font-bold text-lg">{job.title}</h3>
			<p className="text-gray-600">{job.company}</p>
			<p className="text-sm text-gray-400">Status: {job.status}</p>
			<p className="text-xs text-gray-400">Applied: {job.appliedDate}</p>
		</div>
	);
}

export default JobCard;
