import { useState, useEffect } from "react";

import Loading from "./Loading";
import QuestionCard from "./QuestionCard";

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
                loading ? <Loading /> : 
                <div className="border border-[#D3D3D3] rounded-t-sm rounded-b-sm w-3xl m-auto flex flex-col">
                    {questions.map(question => (
                        <QuestionCard question={question} key={question.question_id} />
                    ))}
                </div>
            }
        </div>
    );
};

export default Body;