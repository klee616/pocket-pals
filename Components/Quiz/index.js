import { useState } from 'react';
import questionData from '@/data/question.json';
import { useRouter } from "next/router";
import Question from '@/Components/Question';
import QuizResult from '@/Components/QuizResult';
import ProgressBar from '@/Components/ProgressBar';
import Button from '@/Components/Button';
import { useIntl } from "react-intl";

export default function Qiiz({ category = "all" }) {
    const intl = useIntl();
    const router = useRouter();
    const data = [...questionData].filter((item) => item.category.toLowerCase() == category.toLowerCase());
    const [resultData, setResultData] = useState({
        id: Math.ceil( Math.random() * 9999999999),
        category:category,
        current: 0,
        totalOfCorrectAnswers: 0,
        totalOfWrongAnswers: 0,
        questionList: []
    });

    const { locale } = useRouter();
    const getAnswer = (ans) => {
        let currentOfQuestion = data[resultData.current];
        currentOfQuestion[locale].answer = ans;
        let { totalOfCorrectAnswers, totalOfWrongAnswers } = resultData;
        (currentOfQuestion[locale].answer == currentOfQuestion[locale].correct_answer) ? totalOfCorrectAnswers++ : totalOfWrongAnswers++;
        setResultData(prevState => ({
            ...resultData,
            totalOfCorrectAnswers: totalOfCorrectAnswers,
            totalOfWrongAnswers: totalOfWrongAnswers,
            current: resultData.current + 1,
            questionList: [...resultData.questionList, currentOfQuestion[locale]]
        }));
    };

    return (<>
        {resultData.current < data.length && (<>
            <ProgressBar current={resultData.current + 1} total={data.length} />

            <h1 className={`header_font`}>{intl.formatMessage({ id: "page.quiz.question" })} {resultData.current + 1}</h1>
            <Question data={data[resultData.current]} callBack={getAnswer} />
        </>
        )}

        {resultData.questionList.length == data.length &&
            (
                <><QuizResult resultData={resultData} />
                    <Button name={intl.formatMessage({ id: "page.quiz.play.again" })} onClick={() => { router.push('/Quiz') }} />
                </>
            )
        }
    </>)

}