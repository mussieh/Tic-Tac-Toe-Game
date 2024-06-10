import { useEffect, useRef, useState } from "react";
import xIconOutline from "../assets/images/icon-x-outline.svg";
import oIconOutline from "../assets/images/icon-o-outline.svg";
import xIcon from "../assets/images/icon-x.svg";
import oIcon from "../assets/images/icon-o.svg";
import { GameHelper } from "../GameHelper";

const BoardPiece = ({
    turn,
    setShouldShowModal,
    gameStatus,
    roundStatus,
    setRoundStatus,
    setTurn,
    row,
    column,
    cpuRow,
    cpuColumn,
    gameBoard,
    setGameBoard,
    scoreMethods,
}) => {
    const [isMarked, setIsMarked] = useState(false);
    const [currentMark, setCurrentMark] = useState("");
    const [isOutlineVisible, setIsOutlineVisible] = useState(false);

    const markSrc = () => {
        if (currentMark === "X") {
            return xIcon;
        } else if (currentMark === "O") {
            return oIcon;
        } else {
            return "";
        }
    };

    const outlineSrc = turn === "X" ? xIconOutline : oIconOutline;

    const outlineStyle = isOutlineVisible ? "" : "hidden";
    const markStyle = isMarked ? "" : "hidden";

    const cpuTurn = gameStatus.isCPUGame && gameStatus.playerOneMark !== turn;

    useEffect(() => {
        if (cpuTurn && row === cpuRow && column === cpuColumn && !isMarked) {
            handleBoardClick();
        }
    }, [cpuTurn]);

    const handleBoardClick = () => {
        if (
            !isMarked &&
            !(
                roundStatus === "X" ||
                roundStatus === "O" ||
                roundStatus === "XO"
            )
        ) {
            setIsOutlineVisible(false);
            setIsMarked(true);

            const newGameBoard = gameBoard.slice();
            newGameBoard[row][column] = turn;

            setGameBoard(newGameBoard);

            const roundStatus = new GameHelper(newGameBoard).getRoundStatus();

            if (roundStatus === "X") {
                scoreMethods.setXWins((xWins) => ++xWins);
            } else if (roundStatus === "O") {
                scoreMethods.setOWins((oWins) => ++oWins);
            } else if (roundStatus === "XO") {
                scoreMethods.setTies((ties) => ++ties);
            }

            setRoundStatus(roundStatus);

            setShouldShowModal(
                roundStatus === "X" ||
                    roundStatus === "O" ||
                    roundStatus === "XO"
            );
            setCurrentMark(turn === "X" ? "X" : "O");
            setTurn(turn === "X" ? "O" : "X");
        }
    };

    return (
        <div
            onMouseOver={() => {
                if (!isMarked) {
                    setIsOutlineVisible(true);
                }
            }}
            onMouseOut={() => {
                if (!isMarked) {
                    setIsOutlineVisible(false);
                }
            }}
            onClick={handleBoardClick}
            className={`w-[14rem] h-[14rem] md:w-full md:h-[10rem] bg-semiDarkNavy rounded-[1.5rem] shadow-[0px_8px_0px_0px_rgba(16,33,42,1)] cursor-pointer flex justify-center items-center ${row}${column}-piece`}
        >
            <img
                className={`${outlineStyle} ${
                    isOutlineVisible && isMarked ? "hidden" : ""
                } md:w-1/2 md:h-1/2`}
                src={outlineSrc}
                alt="Outline Icon"
            />
            <img
                className={`${markStyle} md:w-1/2 md:h-1/2`}
                src={markSrc()}
                alt="X or O Icon"
            />
        </div>
    );
};

export default BoardPiece;
