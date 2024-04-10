import style from "./QuizResult.module.css";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
    weight: ['400', '700'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
});

export default function QuizResult({ resultData }) {
    return (<>
        {resultData && (<>
            <div>
                <p className={style.correct}><b>Correct:</b> {resultData.totalOfCorrectAnswers} / {resultData.current} </p>
                <p className={`${style.results} ${sarabun.className}`}>
                    Results
                </p>
                {resultData.questionList && resultData.questionList.map((item, index) => {
                    let backgroundStyle = { background: "var(--button-style-1" }
                    if (item.correct_answer == item.answer)
                        backgroundStyle = { background: "var(--highlight-green)" }
                    return (
                        <>
                            <div className={style.answerPage} key={index}>
                               
                                    <div className={`${style.question} ${sarabun.className}`}>
                                        Question
                                    </div>
                                    <p className={`${style.quizResults} ${sarabun.className}`}>
                                        {item.question}
                                    </p>
                           
                                <div className={style.answer}>
                                    <div style={backgroundStyle} className={`${style.answerResults} ${sarabun.className}`}><b>Answer:</b> {item.correct_answer}</div>
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