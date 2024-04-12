import style from "./MatchifyCard.module.css";

export default function MatchifyCard({ item, gameOver, callback }) {

    const test = (item)=>{
        
        callback(item);
    }
    return (<>
    
        <div 
         className={`${style.card}  ${item.flipped || item.matched ? style.active : ""} ${
            item.matched ? style.matched : ""
          } ${gameOver ? "gameover" : ""}`}  onClick={()=>test(item)}
        >
            <div className={`${style.cardFront}`}>Front {item.display}</div>
            <div className={`${style.cardBack}`}>Click Me</div>
        </div>
    </>);
}