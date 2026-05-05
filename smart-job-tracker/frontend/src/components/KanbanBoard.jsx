// KanbanBoard.jsx
// Displays jobs in columns by status
import React from 'react';
import JobCard from './JobCard';

const STATUSES = ['Applied', 'Interview', 'Offer', 'Rejected'];

function KanbanBoard({ jobs }) {
	return (
		<div className="flex gap-4 w-full overflow-x-auto">
			{STATUSES.map(status => (
				<div key={status} className="flex-1 min-w-[220px]">
					<h2 className="text-xl font-semibold mb-2">{status}</h2>
					<div className="space-y-2">
						{jobs.filter(job => job.status === status).map(job => (
							<JobCard key={job.id} job={job} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default KanbanBoard;
