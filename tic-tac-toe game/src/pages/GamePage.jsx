import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TurnBar from "../components/TurnBar";
import Board from "../components/Board";
import ScoreBar from "../components/ScoreBar";
import StatusModal from "../components/StatusModal";

const GamePage = () => {
    const [turn, setTurn] = useState("X");
    const [gameBoard, setGameBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [roundStatus, setRoundStatus] = useState("");
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const [isRestartButtonPressed, setIsRestartButtonPressed] = useState(false);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
    const [ties, setTies] = useState(0);

    const { state } = useLocation();
    const navigate = useNavigate();

    const playerOneMark = state.playerOneMark;
    const isCPUGame = state.isCPUGame;

    const handleRestartButtonPress = () => {
        if (shouldShowModal) return;
        setIsRestartButtonPressed(true);
        setShouldShowModal(true);
    };

    const gameStatus = {
        roundStatus,
        playerOneMark,
        isCPUGame,
    };

    const scoreMethods = {
        setXWins,
        setOWins,
        setTies,
    };

    const startRound = () => {
        setGameBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setRoundStatus("");
        setTurn("X");
        setIsRestartButtonPressed(false);
        setShouldShowModal(false);
    };

    const restartGame = () => {
        navigate(-1);
    };

    return (
        <main className="flex justify-center items-center h-screen bg-darkNavy font-medium text-[1.4rem] tracking-[0.08rem]">
            <StatusModal
                gameStatus={gameStatus}
                shouldShowModal={shouldShowModal}
                setShouldShowModal={setShouldShowModal}
                isRestartButtonPressed={isRestartButtonPressed}
                setIsRestartButtonPressed={setIsRestartButtonPressed}
                startRound={startRound}
                restartGame={restartGame}
            />
            <section className="w-[46rem] h-[62.3rem] md:w-[80%] z-0">
                <TurnBar
                    turn={turn}
                    gameStatus={gameStatus}
                    onRestartButtonClick={handleRestartButtonPress}
                />
                <Board
                    turn={turn}
                    gameStatus={gameStatus}
                    roundStatus={roundStatus}
                    setRoundStatus={setRoundStatus}
                    setTurn={setTurn}
                    setShouldShowModal={setShouldShowModal}
                    gameBoard={gameBoard}
                    scoreMethods={scoreMethods}
                    setGameBoard={setGameBoard}
                />
                <ScoreBar
                    gameStatus={gameStatus}
                    xWins={xWins}
                    oWins={oWins}
                    ties={ties}
                />
            </section>
        </main>
    );
};

export default GamePage;
