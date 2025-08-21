import { useState, useEffect } from "react";

import Loading from "./Loading";

const Body = () => {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const data = await fetch(
                "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
            );

            const json = await data.json();
            console.log(json);
            setQuestions(json.items);
            setLoading(false);
        }

        fetchData();

    }, []);

    return (
        <div className="h-screen">
            {
                loading ? <Loading /> : <ul>
                    {questions.map(question => (
                        <li key={question.question_id}>{question.title}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Body;