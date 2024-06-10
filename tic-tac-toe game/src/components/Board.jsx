import BoardPiece from "./BoardPiece";
import { AIPlayer } from "../AIPlayer";

const Board = ({
    turn,
    roundStatus,
    gameStatus,
    setRoundStatus,
    setShouldShowModal,
    setTurn,
    gameBoard,
    setGameBoard,
    scoreMethods,
}) => {
    const aiPlayer = new AIPlayer();
    const nextCPUPosition = aiPlayer.getNextMovePosition(turn, gameBoard);
    const cpuRow = Number(nextCPUPosition[0]);
    const cpuColumn = Number(nextCPUPosition[1]);

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-[2rem] my-[1.9rem]">
            {gameBoard.map((rowArray, row) => {
                return rowArray.map((_, col) => {
                    return (
                        <BoardPiece
                            turn={turn}
                            roundStatus={roundStatus}
                            gameStatus={gameStatus}
                            setRoundStatus={setRoundStatus}
                            setShouldShowModal={setShouldShowModal}
                            setTurn={setTurn}
                            row={row}
                            column={col}
                            cpuRow={cpuRow}
                            cpuColumn={cpuColumn}
                            gameBoard={gameBoard}
                            setGameBoard={setGameBoard}
                            scoreMethods={scoreMethods}
                            key={`${row}${col}${roundStatus}`}
                        />
                    );
                });
            })}
        </div>
    );
};

export default Board;
