import style from './QuestionSelection.module.css'
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
                    id={`question${id}`}
                    name={`question`}
                    tabIndex={tabIndex}
                    onChange={()=>callback(item)}
                    checked={checked}
                />
                <label for={`question${id}`}>{item}</label>
            </div>

        </>
    )
}