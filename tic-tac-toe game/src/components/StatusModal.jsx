import xIcon from "../assets/images/icon-x.svg";
import oIcon from "../assets/images/icon-o.svg";
import { Link, useNavigate } from "react-router-dom";

const StatusModal = ({
    gameStatus,
    shouldShowModal,
    setShouldShowModal,
    isRestartButtonPressed,
    setIsRestartButtonPressed,
    startRound,
    restartGame,
}) => {
    const navigate = useNavigate();

    const winStatusHidden =
        gameStatus.roundStatus === "XO" ||
        gameStatus.roundStatus === "" ||
        isRestartButtonPressed
            ? "hidden"
            : "";

    const modalHidden = shouldShowModal ? "" : "hidden";

    const gameWinnerIcon = gameStatus.roundStatus === "X" ? xIcon : oIcon;

    const gameWinnerColor = (() => {
        if (gameStatus.roundStatus === "X" && !isRestartButtonPressed) {
            return "text-lightBlue";
        } else if (gameStatus.roundStatus === "O" && !isRestartButtonPressed) {
            return "text-lightYellow";
        } else {
            return "text-silver";
        }
    })();

    const restartButtonHidden = isRestartButtonPressed ? "" : "hidden";

    const quitButtonHidden = isRestartButtonPressed ? "hidden" : "";

    const headerStyle =
        isRestartButtonPressed || gameStatus.roundStatus === "XO"
            ? "justify-center"
            : "justify-between";

    const getWinStatusMessage = () => {
        if (gameStatus.roundStatus === "") return "";
        if (gameStatus.isCPUGame) {
            if (gameStatus.playerOneMark === gameStatus.roundStatus) {
                return "YOU WON!";
            } else {
                return "OH NO, YOU LOST...";
            }
        } else {
            if (gameStatus.playerOneMark === gameStatus.roundStatus) {
                return "PLAYER 1 WINS!";
            } else {
                return "PLAYER 2 WINS!";
            }
        }
    };

    const getWinStatusHeader = () => {
        if (isRestartButtonPressed) {
            return "RESTART GAME?";
        } else if (
            gameStatus.roundStatus === "X" ||
            gameStatus.roundStatus === "O"
        ) {
            return "TAKES THE ROUND";
        } else if (gameStatus.roundStatus === "XO") {
            return "ROUND TIED";
        }
    };

    return (
        <div
            className={`h-[26.6rem] w-full z-10 absolute bg-semiDarkNavy ${modalHidden} flex justify-center items-center text-center`}
        >
            <div className="w-[49.1rem] h-[17.6rem] md:w-[90%]  flex flex-col justify-between">
                <p
                    className={`${winStatusHidden} text-silver font-bold text-[1.6rem] tracking-[0.1rem]`}
                >
                    {getWinStatusMessage()}
                </p>
                <div
                    className={`flex ${headerStyle} items-center ${gameWinnerColor}`}
                >
                    <img
                        className={`${winStatusHidden}`}
                        src={gameWinnerIcon}
                        alt="Game Winner icon"
                    />
                    <h1 className="font-bold text-[4rem] tracking-[0.25rem] md:text-[3rem] sm:text-[2.3rem]">
                        {getWinStatusHeader()}
                    </h1>
                </div>
                <div>
                    <div
                        className={`flex justify-center items-center gap-[1.6rem] ${quitButtonHidden}`}
                    >
                        <button
                            onClick={() => {
                                navigate(-1);
                            }}
                            className="p-[1.6rem] bg-silver text-darkNavy font-bold text-[1.6rem] tracking-[0.1rem] rounded-[1rem] shadow-[0px_4px_0px_0px_rgba(107,137,151,1)] hover:bg-silverHover"
                        >
                            QUIT
                        </button>
                        <button
                            onClick={() => startRound()}
                            className="p-[1.6rem] bg-lightYellow text-darkNavy font-bold text-[1.6rem] tracking-[0.1rem] rounded-[1rem] shadow-[0px_4px_0px_0px_rgba(204,139,19,1)] hover:bg-lightYellowHover"
                        >
                            NEXT ROUND
                        </button>
                    </div>
                    <div
                        className={`flex justify-center items-center gap-[1.6rem] ${restartButtonHidden}`}
                    >
                        <button
                            onClick={() => {
                                setShouldShowModal(false);
                                setIsRestartButtonPressed(false);
                            }}
                            className="p-[1.6rem] bg-silver text-darkNavy font-bold text-[1.6rem] tracking-[0.1rem] rounded-[1rem] shadow-[0px_4px_0px_0px_rgba(107,137,151,1)] hover:bg-silverHover"
                        >
                            NO, CANCEL
                        </button>
                        <button
                            onClick={() => restartGame()}
                            className="p-[1.6rem] bg-lightYellow text-darkNavy font-bold text-[1.6rem] tracking-[0.1rem] rounded-[1rem] shadow-[0px_4px_0px_0px_rgba(204,139,19,1)] hover:bg-lightYellowHover"
                        >
                            YES, RESTART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusModal;
