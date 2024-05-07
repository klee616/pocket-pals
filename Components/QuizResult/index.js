import style from "./QuizResult.module.css";
import QuizResultAnswer from "../QuizResultAnswer";
import { useIntl } from "react-intl";
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { useEffect, useState, useRef } from "react";

export default function QuizResult({ resultData }) {
    const intl = useIntl();
    const [nickName, setNickName] = useState();
    const successSoundEffect = useRef();
    const failSoundEffect = useRef();
    const playSuccess = () => {
        if (successSoundEffect.current) {
            successSoundEffect.current.play();
        }
    }
    const playFail = () => {
        if (failSoundEffect.current) {
            failSoundEffect.current.play();
        }
    }

    useEffect(() => {
        setNickName(window.sessionStorage.getItem("nickname"));
        saveResultInCookies();
        if(resultData.totalOfCorrectAnswers / resultData.current >= 0.5){
            playSuccess();
        }else{
            playFail();
        }
    }, []);
    const saveResultInCookies = async () => {
        let historyRecord = getCookie('historyRecord');
        let historyRecordList = historyRecord ? JSON.parse(historyRecord) : [];
        let isRecord = false;
        console.log(historyRecordList);
        historyRecordList.map((item) => {
            if (item.id == resultData.id) {
                isRecord = true;
            }
        });
        if (!isRecord) {
            historyRecordList.push({ id: resultData.id, name: window.sessionStorage.getItem("nickname"), topic: resultData.topic, date: new Date(), scores: Math.round(resultData.totalOfCorrectAnswers / resultData.current * 100) })

            setCookie('historyRecord', historyRecordList);
        }
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

            <audio ref={failSoundEffect} src='/sound/fail.mp3' />
            <audio ref={successSoundEffect} src='/sound/success.mp3' />
        </>)
        }

    </>)

}