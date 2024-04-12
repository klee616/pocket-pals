import style from './questionSelection.module.css';
import { Patrick_Hand } from 'next/font/google';
    const patrickHand = Patrick_Hand({
        weight: '400',
        subsets: ['latin'],
    });
export default function QuestionSelection({ id, item, callback, checked, tabIndex }) {
    
    return (
        <>
            <div className={`${style.answer} ${patrickHand.className}`}>
                <input
                    type='radio'
                    id={id}
                    name={`question`}
                    tabIndex={tabIndex}
                    onChange={callback}
                    checked={checked}
                />
                <label for={id}>{item}</label>
            </div>

        </>
    )
}