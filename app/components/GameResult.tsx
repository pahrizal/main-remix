import clsx from "clsx";
import React, { useRef } from "react";
import { useNavigate } from "remix";
import { PlayerData } from "~/controllers/player";
import Button from "./Button";
import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "~/stores";
import { gameActions } from "~/stores/gameState";

interface Props extends PlayerData {
    isTheWinner: boolean;
}

const GameResult: React.FC<Props> = (props) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const audio = useRef<HTMLAudioElement>(null);
    React.useEffect(() => {
        if (audio.current) {
            audio.current.play();
        }
    }, []);
    return (
        <div
            className={clsx(
                "fixed top-0 left-0",
                "z-[99] flex flex-col justify-center items-center",
                "w-screen h-screen",
                "backdrop-blur-[3px]"
            )}
        >
            <audio ref={audio} src={props.isTheWinner ? "/audio/winner.wav" : "/audio/lost.mp3"} autoPlay />
            {props.isTheWinner && (
                <>
                    <Confetti className="w-screen h-screen" />
                </>
            )}
            <div
                className={clsx(
                    "flex flex-col justify-center items-center",
                    "w-[400px] p-8",
                    "border-2 border-slate-100",
                    "bg-slate-900 text-slate-100 font-exo text-4xl"
                )}
            >
                <p className="text-4xl">{props.isTheWinner ? "You won! 🎉🎉🎉" : "You lost! 😭😭😭"}</p>
                {!props.isTheWinner && (
                    <p className="text-2xl mt-4 font-virgil">
                        The winner is <b className="text-lime-500 font-exo">{props.name}</b>
                    </p>
                )}
                <div className="mt-8">
                    <Button
                        onClick={() => {
                            location.href = "/";
                        }}
                    >
                        Back to lobby
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GameResult;
