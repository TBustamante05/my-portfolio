"use client";
import { Send } from "lucide-react";
import { useState } from "react";

type Status = 'idle' | 'loading' | 'success' | 'error';

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const buttonText = {
    idle: 'Send',
    loading: 'Sending...',
    success: 'Thank you!',
    error: 'Try again',
  }[status];

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isLoading = status === 'loading';

  return (
    <div className="mt-16 md:mt-30 justify-center flex flex-col items-center gap-8 sm:px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight uppercase text-end c-inverse">
          Let&apos;s Talk
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold c-accent leading-none tracking-tight uppercase mb-4">
          Contact!
        </h2>
      </div>
      <form className="px-6 md:px-7 py-8 bg-neutral-900 rounded-3xl w-full sm:max-w-[500px] c-inverse flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Name</label>
          <input
            className="border border-[#BFBAB0] px-4 py-2 rounded-3xl bg-transparent"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Email</label>
          <input
            className="border border-[#BFBAB0] px-4 py-2 rounded-3xl bg-transparent"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Message</label>
          <textarea
            className="border border-[#BFBAB0] px-4 py-2 rounded-xl bg-transparent"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isLoading}
          />
        </div>
        <div
          onClick={!isLoading ? handleSubmit : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center gap-2 px-6 py-3.5 rounded-4xl text-lg font-semibold uppercase self-center mt-4 cursor-pointer duration-300 transition-all
            ${status === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-[#EB5E28] hover:bg-[#d94e20]'}
            ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}
            text-white`}
        >
          <span>{buttonText}</span>
          <Send className={`w-4 transition-transform duration-200 ${isHovered && !isLoading ? "translate-x-1 -translate-y-1" : ""}`} />
        </div>
      </form>
    </div>
  );
}

export default Contact;