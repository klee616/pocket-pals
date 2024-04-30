import style from "./QuizResult.module.css";
import QuizResultAnswer from "../QuizResultAnswer";
import { useIntl } from "react-intl";
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { useEffect,useState } from "react";

export default function QuizResult({ resultData }) {
    const intl = useIntl();
    const [nickName, setNickName] = useState("");


    useEffect(() => {
        setNickName(window.sessionStorage.getItem("nickname"));
        saveResultInCookies();
    }, []);
    const saveResultInCookies = async () => {
        let historyRecord = getCookie('historyRecord');
        let historyRecordList = historyRecord ? JSON.parse(historyRecord) : [];
        historyRecordList.push({ name: nickName, category: resultData.category, date: new Date(), scores: Math.round(resultData.totalOfCorrectAnswers / resultData.current * 100) })
        setCookie('historyRecord', historyRecordList);
    }
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