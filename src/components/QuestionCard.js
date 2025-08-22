
const QuestionCard = (props) => {
    const { question } = props;
    
    const {
        tags,
        owner,
        score,
        answer_count,
        view_count,
        title,
 } = question;

    console.log(question);


    return (
        <div className="">
            <div className="flex border-b border-b-[#D3D3D3] border-gray-800 w-3xl items-center gap-10 relative hover:shadow-lg h-[200px]">
                {/*score answer_count, view_count */}
                <div className="flex flex-col p-4 flex-wrap ">
                    <span>{score}</span>
                    <span className="border border-green-600 text-green-600 pr-2 pl-2">{answer_count} answers</span>
                    <span className="text-amber-600">{view_count > 1000 ? `${(view_count / 1000).toFixed(1)}k` : view_count} views</span>
                </div>

                {/* content */}
                <div className="flex flex-col gap-4 p-2">
                    <h3>{title}</h3>
                    {/* tags */}
                    <div className="flex flex-wrap gap-2 w-full">
                        {
                            tags.map((tag, index) => (
                                <p key={index}  className="bg-gray-100 border border-gray-500 rounded-sm hover:bg-gray-200 cursor-pointer pr-4 pl-4">{tag}</p>
                            ))
                        }
                    </div>
                </div>
                {/* user details */}
                <div className="absolute bottom-0 right-0 p-2 flex">
                    <p>{owner.display_name}</p>
                    <p>Posted on: {new Date(question.creation_date * 1000).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;