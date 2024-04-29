import style from "./QuizResult.module.css";
import QuizResultAnswer from "../QuizResultAnswer";
import { useIntl } from "react-intl";

export default function QuizResult({ resultData }) {
    const intl = useIntl();
    return (<>
        {resultData && (<>

            <h1 className={`header_font ${style.header}`}>{intl.formatMessage({ id: "page.quiz.result" })}</h1>
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