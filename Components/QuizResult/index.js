import style from "./QuizResult.module.css";
import { Sarabun } from "next/font/google";
import QuizResultAnswer from "../QuizResultAnswer";

const sarabun = Sarabun({
    weight: ['400', '700'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
});

export default function QuizResult({ resultData }) {
    return (<>
        {resultData && (<>

            <h1 className={`header_font ${style.header}`}>Result</h1>
            <div className={`header_font ${style.scores}`}>
                {resultData.totalOfCorrectAnswers} / {resultData.current}
            </div>

                {resultData.questionList && resultData.questionList.map((item, index) => {
                    let backgroundStyle = { background: "var(--button-style-1" }
                    if (item.correct_answer == item.answer)
                        backgroundStyle = { background: "var(--highlight-green)" }
                    return (
                        <>
                           <QuizResultAnswer item={item} />
                        </>
                    )
                })}
        </>)
        }

    </>)

}