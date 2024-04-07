import style from "./QuizResult.module.css";

export default function QuizResult({    resultData
}) {
    return (<>
        {resultData && (<>
                    <div>
                        <p className={style.results}><b>Correct:</b> {resultData.totalOfCorrectAnswers} / {resultData.current} </p>
                        <p>
                            <p className={style.answerList}>
                            Answer List:
                            </p>
                            {resultData.questionList && resultData.questionList.map((item, index) => {
                                return (
                                <>
                                <div className={style.answerPage} key={index}>
                                    <div className={style.question}>
                                    Question: {item.question}
                                    </div>

                                 
                                    <div className={style.answer}>
                                    Answer: {item.correct_answer}
                                    {item.correct_answer == item.answer ? "&npsp;Correct": "Wrong"}
                                    </div>
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