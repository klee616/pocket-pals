import { useEffect, useState } from 'react'
import style from './QuizResultAnswer.module.css'
import { useIntl } from "react-intl";

export default function QuizResultAnswer({item}){
    const intl = useIntl();
    const [isCorrect, setIsCorrect] = useState(item.correct_answer == item.answer);
    return (<>

    <div className={style.question}> <span className='label-font-style'>{intl.formatMessage({ id: "page.quiz.question" })} :</span> {item.question}</div>
    <div className={`${style.answer} ${isCorrect?style.correct:style.wrong}`}>
        {item.correct_answer}
     </div>
    </>)
}