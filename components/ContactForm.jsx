import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm({
    labelEmail = "Email Address",
    labelMessage = "Message",
    placeholderEmail = "your@email.com",
    placeholderMessage = "How can we help you?",
    btnSubmit = "Submit",
    successMessage = "Thanks for joining! We'll be in touch soon."
}) {
    const [state, handleSubmit] = useForm("xpwvjdvb");
    if (state.succeeded) {
        return (
            <div className="text-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-green-400 font-medium text-lg">{successMessage}</p>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    {labelEmail}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder={placeholderEmail}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    {labelMessage}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder={placeholderMessage}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
            >
                {btnSubmit}
            </button>
        </form>
    );
}
