// api.js
// Handles API calls to backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function getJobs() {
	const res = await fetch(`${API_URL}/jobs`);
	if (!res.ok) throw new Error('Failed to fetch jobs');
	return res.json();
}

export async function addJob(job) {
	const res = await fetch(`${API_URL}/jobs`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(job),
	});
	if (!res.ok) throw new Error('Failed to add job');
	return res.json();
}
