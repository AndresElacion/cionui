import { useEffect, useState } from 'react';
import { getPaginatedFeedback } from '../backend/supabaseClient';
import { Database } from '../../supabase-types';

export default function GetFeedbackData() {
    const [feedback, setFeedback] = useState<Database['public']['Tables']['feedback']['Row'][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const pageSize = 5;

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const { data, count } = await getPaginatedFeedback(page, pageSize);
                setFeedback(data);
                setTotalItems(count || 0);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getFeedback();
    }, [page]);

    const totalPages = Math.ceil(totalItems / pageSize);

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
                Feedback & Request List
            </h2>
            <ul className="space-y-4">
                {feedback.map((item) => (
                    <li key={item.id} className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">{item.message}</p>
                        <p className="text-sm text-gray-500">{new Date(item.created_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handlePreviousPage}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                    disabled={page === 1}
                >
                    Previous
                </button>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageClick(index + 1)}
                            className={`px-4 py-2 rounded-md transition ${
                                page === index + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}