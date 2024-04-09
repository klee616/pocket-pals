import style from "./QuizResult.module.css";

export default function QuizResult({ resultData }) {
    return (<>
        {resultData && (<>
            <div>
                <p className={style.results}><b>Correct:</b> {resultData.totalOfCorrectAnswers} / {resultData.current} </p>
                <p className={style.answerList}>
                    Answer List:
                </p>
                {resultData.questionList && resultData.questionList.map((item, index) => {
                    let backgroundStyle = { background: "var(--button-style-1" }
                    if (item.correct_answer == item.answer)
                        backgroundStyle = { background: "var(--highlight-green)" }
                    return (
                        <>
                            <div className={style.answerPage} key={index}>
                                <div className={style.question}>
                                    Question: {item.question}
                                </div>
                                <div className={style.answer}>
                                    <div style={backgroundStyle}><b>Answer:</b> {item.correct_answer}</div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>)
        }

    </>)

}