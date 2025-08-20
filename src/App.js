import React from "react";
import ReactDOM from "react-dom/client";

import { questions } from "./utils/mockData.js";

const AppLayout = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600 text-center">
                College Q&A Platform
            </h1>
            <p className="mt-2 text-gray-600 text-center">
                Ask and answer questions easily 🎓
            </p>

            {/* Question List */}
            <div className="mt-8 space-y-4">
                {questions.map((q) => (
                    <div
                        key={q.id}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{q.title}</h2>
                        <span className="inline-block mt-1 text-sm text-white bg-blue-500 px-2 py-1 rounded-md">
                            {q.subject}
                        </span>
                        <p className="mt-2 text-gray-600">{q.description}</p>
                        <div className="mt-3 flex justify-between text-sm text-gray-500">
                            <span>Answers: {q.answers}</span>
                            <span>Upvotes: {q.upvotes} 👍</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

