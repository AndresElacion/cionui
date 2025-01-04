import { useState } from 'react';
import { supabase } from '../backend/supabaseClient';
import { Database } from '../../supabase-types';

export default function FeedbackForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const submitFeedback = async () => {
        try {
            const { error } = await supabase.from('feedback').insert<[Database['public']['Tables']['feedback']['Insert']]>([
                {
                    name: name,
                    message: message
                }
            ]);
            
            if (error) throw error;

            setName('');
            setMessage('');
            setSuccess('Feedback/Request submitted successfully!');

            setTimeout(() => {
                setSuccess('');
            }, 3000); // Clear success message after 3 seconds
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('An unknown error occurred');
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 dark:bg-gray-800 border-gray-400 border-2 dark:border-none shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
                    Feedback / Request Form
                </h2>
                <div className="mb-6 text-center">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                        Your feedback and requests are highly appreciated to enhance this system.
                    </p>
                    <p className="text-sm text-gray-500">
                        Please let us know how we can improve.
                    </p>
                </div>
                {success && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md">
                        <p>{success}</p>
                    </div>
                )}
                {/* Name */}
                <div className="mb-4">
                    <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Full Name
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        className="mt-1 block w-full px-4 py-2 border-gray-400 border-2 dark:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='John Doe'
                    />
                </div>
                {/* Message */}
                <div className="mb-6">
                    <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Message
                    </label>
                    <textarea 
                        id="message"
                        className="mt-1 block w-full px-4 py-2 border-gray-400 border-2 dark:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Your message here...'
                    />
                </div>
                <div>
                    <button 
                        onClick={submitFeedback}
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}