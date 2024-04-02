import { useState, useEffect } from 'react';
import questionData from '@/data/question.json';
import Question from '@/Components/Question';
import QuizResult from '@/Components/QuizResult';
import {useRouter} from 'next/router'


export default function Qiiz({ type = "all" }) {
    const [data, setData] = useState(questionData);

    const [resultData, setResultData] = useState({
        current: 0,
        totalOfCorrectAnswers: 0,
        totalOfWrongAnswers: 0,
        questionList: []
    });

    const { locale } = useRouter();

console.log(locale);
    const getAnswer = (ans) => {
        let currentOfQuestion = data[resultData.current];

        currentOfQuestion[locale].answer = ans;
        console.log(currentOfQuestion[locale].correct_answer);
        currentOfQuestion[locale].answer = ans;

        if (currentOfQuestion[locale].answer == currentOfQuestion[locale].correct_answer) {
            setResultData(prevState => ({
                ...resultData,
                totalOfCorrectAnswers: resultData.totalOfCorrectAnswers + 1,
                current: resultData.current + 1,
                questionList: [...resultData.questionList, currentOfQuestion[locale]]
            }));
        } else {
            setResultData(prevState => ({
                ...resultData,
                totalOfWrongAnswers: resultData.totalOfWrongAnswers + 1,
                current: resultData.current + 1,
                questionList: [...resultData.questionList, currentOfQuestion[locale]]
            }));
        }
    };


    return (<>
        {resultData.current < data.length && (<>
            <Question data={data[resultData.current]} callBack={getAnswer} /></>
        )}

        {resultData.questionList.length == data.length &&
            (
                <><QuizResult resultData={resultData} /></>
            )
        }
    </>)

}