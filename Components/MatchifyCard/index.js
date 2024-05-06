import style from "./MatchifyCard.module.css";
import Image from "next/image";

export default function MatchifyCard({ item, gameOver, callback }) {

    const test = (item) => {

        callback(item);
    }
    return (<>

        <button tabIndex={'0'}
            className={`${style.card}  ${item.flipped || item.matched ? style.active : ""} ${item.matched ? style.matched : ""
                } ${gameOver ? "gameover" : ""}`} onClick={() => test(item)}
        >
            <div  className={`${style.cardFront}`}>
                <Image src={item.image}
                    height={75} width={75} alt="" />
            </div>
            <div className={`${style.cardBack}`}>
                <Image src={`/image/Mascot.svg`}
                    height={120} width={80} alt="" />
            </div>
        </button>
    </>);
}