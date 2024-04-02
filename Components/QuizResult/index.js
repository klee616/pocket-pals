

export default function QuizResult({    resultData
}) {
    return (<>
        {resultData && (<>
                    <div>
                        <p><b>Correct:</b> {resultData.totalOfCorrectAnswers} / {resultData.current} </p>
                        <p>
                            Answer List:
                            {resultData.questionList && resultData.questionList.map((item, index) => {
                                return (
                                <>
                                <div key={index}>
                                    Question: {item.question}
                                    <br />
                                    Answer: {item.correct_answer}
                                    {item.correct_answer == item.answer ? "&npsp;Correct": "Wrong"}
                                </div>
                                </>
                                )
                            })}
                        </p>
                    </div >
                </>)
                }
        <br />
        </>)
    
}