import matchifyData from '@/data/matchify.json';
import { useEffect, useState, useRef } from 'react';
import MatchifyCard from '@/Components/MatchifyCard';
import style from './Matchify.module.css';
import ProgressBar from '@/Components/ProgressBar';
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';
import MatchifyResult from '@/Components/MatchifyResult';
import Button from '@/Components/Button';
import Image from 'next/image';
import { useIntl } from "react-intl";

export default function Matchify() {
    const intl = useIntl();
    const [data, setData] = useState(matchifyData);
    const [gameData, setGameData] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [move, setMove] = useState(0);
    const [timeLeft, setTimeLeft] = useState(240);
    const [endGame, setEndGame] = useState(false);
    const [nickName, setNickName] = useState();
    const [gameResult, setGameResult] = useState({});
    const matchSuccessSoundEffect = useRef();


    const initGame = () => {
        gameStart();
        setFlippedCards([]);
        setMatchedCards([]);
        setEndGame(false);
        setTimeLeft(240);
        setMove(0);
        setGameResult({});
    }

    const matchSuccessSoundPlayer = () => {
        if (matchSuccessSoundEffect.current) {
            matchSuccessSoundEffect.current.play();
        }
    }

    const gameStart = () => {
        const startGameData = [];
        let id = 0;
        data.map((item) => {
            let parent = { id: id++, group: item.groupName, image: item.image, display: item.parent.en, flipped: false, matched: false };
            let child = { id: id++, group: item.groupName, image: item.image, display: item.child.en, flipped: false, matched: false };
            startGameData.push(parent);
            startGameData.push(child);
        });
        setGameData(startGameData.sort(() => 0.5 - Math.random()));
    }

    useEffect(() => {
        let preItemList = gameData.filter((i) => { return i.matched == true });
        if (preItemList.length == gameData.length) {
            setEndGame(true);
        }
    }, [gameData]);

    useEffect(function () {
        if (timeLeft > 0 && !endGame) {
            const interval = setInterval(function () {
                setTimeLeft(timeLeft - 1);
            }, 1000)
            return function () {
                clearTimeout(interval);
            }
        } else {
            setEndGame(true);

            //Save record
            saveResultInCookies();
        }
    }, [timeLeft]);

    useEffect(() => {
        initGame();
        setNickName(window.sessionStorage.getItem("nickname"));
    }, []);

    const saveResultInCookies = async () => {
        let result = {};


        let historyRecord = getCookie('mixMatchhistoryRecord');
        let historyRecordList = historyRecord ? JSON.parse(historyRecord) : [];

        result.id = Math.floor(Math.random() * 100000);
        result.name = window.sessionStorage.getItem("nickname");
        result.date = new Date();
        result.time = Math.round(240 - timeLeft);
        result.move = move;
        setGameResult(result);
        historyRecordList.push({ id: result.id, name: result.name, date: result.date, time: Math.round(240 - timeLeft), move: move });

        setCookie('mixMatchhistoryRecord', historyRecordList);

    }

    const updateActiveCards = (item) => {
        let preItemList = gameData.filter((i) => { return i.flipped == true });
        if (preItemList.filter((i) => i.id == item.id).length > 0) {
            return;
        }
        console.log("continous");

        if (preItemList.length >= 2) {
            gameData.map((i) => {
                if (i.id == item.id) {
                    i.flipped = true;
                } else {
                    i.flipped = false;
                }
            });
        } else if (preItemList.length == 0) {
            gameData.map((i) => {
                if (i.id == item.id) {
                    i.flipped = true;
                }
            });
        } else {
            gameData.map((i) => {
                if ((preItemList[0].group == item.group && preItemList[0].id == i.id) || (preItemList[0].group == item.group && item.id == i.id)) {
                    i.matched = true;
                    i.flipped = true;
                    matchSuccessSoundPlayer();
                } else if (item.id == i.id) {
                    i.flipped = true;
                }
            });
        }
        setGameData([...gameData]);
        setMove(move + 1);
    }
    return (
        <>   {
            !endGame && <>
                <ProgressBar current={timeLeft} total={`240`} type="" />
            </>
        }

            <div className={style.gameBoard}>
                {
                    (gameData && !endGame) && gameData.map((item, index) => {
                        return (
                            <>
                                <MatchifyCard key={index} item={item} endGame={endGame} image={item.image} callback={updateActiveCards} tabIndex={`0`}/>
                            </>
                        )
                    })
                }
            </div>

            {
                endGame &&

                <>
                    <MatchifyResult result={gameResult} />

                    <Image className={style.mascot} src="/image/Mascot.svg" width={200} height={300} alt="POCKET PALS" />
                    <Button name={intl.formatMessage({ id: "page.quiz.play.again" })} onClick={() => { initGame() }} />
                </>
            }

            <audio ref={matchSuccessSoundEffect} src='/sound/matchsuccess.mp3' />
        </>
    )
}