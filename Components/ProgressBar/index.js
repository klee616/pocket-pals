import style from './ProgressBar.module.css';
import Image from 'next/image';

export default function ProgressBar({ current, total, type = 'step' }) {
    let persent = (current * 100 / total) > 100 ? 100 : current * 100 / total;
    current = current > total ?total:current;
    let imagePath = "";
    let alt = "";
    if (type == "step") {

        imagePath = "/icon/object.png";
        alt = "Step";
    } else {
        imagePath = "/icon/timer.png";
        alt = "Timer";

    }

    return (<>
        <div className={style.progressBarContainer}>
            <Image src={imagePath} className='Icon' width="30" height="30" alt={alt} />
            <div className={style.progressBarBackground}>
                <div className={style.progressStatus} style={{ width: `${persent}%` }}>
                </div>
            </div>
            <div>
            {
                type == 'step' ? `${current}/${total}` : `${current} S`
            }</div>
        </div>

    </>);
}