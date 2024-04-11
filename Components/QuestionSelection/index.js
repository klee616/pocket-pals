import style from './questionSelection.module.css';
import { Patrick_Hand } from 'next/font/google';

    const patrickHand = Patrick_Hand({
        weight: '400',
        subsets: ['latin'],
    });

export default function QuestionSelection({ id, item, callback, tabIndex, onKeyDown }) {

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            callback();
        }
    };

    
    return (
        <>
            <div className={`${style.answer} ${patrickHand.className}`}>
                <input
                    type='radio'
                    id={id}
                    tabIndex={tabIndex}
                    onKeyDown={handleKeyDown}
                    onClick={callback}
                />
                <label for={id}>{item}</label>
            </div>

        </>
    )
}