import style from './Selector.module.css'

export default function (prop) {
    console.log(prop)
    const onChange = (e) => { prop.onChange(e.target.value) }
    return (<>
        <div className={style.selector}>
            <select value={prop.value} defaultValue={prop.defaultValue} tabIndex={prop.tabIndex} onChange={(e) => { onChange(e) }}>
                {prop.optionList.map((item, key) => {
                    return (<>
                        <option key={key} value={item.value}>{item.displayValue}</option>
                    </>)

                })}
            </select>
        </div>
    </>)

}