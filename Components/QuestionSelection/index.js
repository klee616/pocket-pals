import style from './QuestionSelection.module.css'
export default function QuestionSelection({ id, item, callback, checked, tabIndex }) {
    
    return (
        <>
            <div className={`${style.answer} `}>
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