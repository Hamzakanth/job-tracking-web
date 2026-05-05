// AddJob.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { addJob } from '../services/api';
import { useNavigate } from 'react-router-dom';

function AddJob() {
	const [form, setForm] = useState({ title: '', company: '', status: 'Applied', appliedDate: '' });
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		await addJob(form);
		setLoading(false);
		navigate('/');
	};

	return (
		<div>
			<Navbar />
			<div className="p-6 max-w-md mx-auto">
				<h1 className="text-2xl font-bold mb-4">Add Job Application</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input name="title" value={form.title} onChange={handleChange} required placeholder="Job Title" className="w-full border p-2 rounded" />
					<input name="company" value={form.company} onChange={handleChange} required placeholder="Company" className="w-full border p-2 rounded" />
					<input name="appliedDate" value={form.appliedDate} onChange={handleChange} required placeholder="Applied Date (YYYY-MM-DD)" className="w-full border p-2 rounded" />
					<select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
						<option>Applied</option>
						<option>Interview</option>
						<option>Offer</option>
						<option>Rejected</option>
					</select>
					<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
						{loading ? 'Adding...' : 'Add Job'}
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddJob;
