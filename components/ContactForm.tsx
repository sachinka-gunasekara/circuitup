"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message Sent !');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error occurred. Try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-[#01071a] border-2 border-slate-700 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-slate-300">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#bcbcbc]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-[#01071a] border-slate-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#bcbcbc]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-[#01071a] border-slate-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#bcbcbc]">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-[#01071a] border-slate-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#bcbcbc]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-[#01071a] border-slate-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#33b4f4] text-white py-2 px-4 rounded-md hover:bg-slate-600  focus:outline-none focus:ring-2 focus:ring-blue-950"
        >
          Send
        </button>
        {status && <p className="mt-2 text-center text-[#bcbcbc]">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
