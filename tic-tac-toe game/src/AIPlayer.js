import { GameHelper } from "./GameHelper";

export class AIPlayer {
    constructor() {
        this.previousMove = [];
        this.moveTaken = false;
    }

    getMoveScore(turn, move) {
        const gameHelper = new GameHelper(move);
        const roundStatus = gameHelper.getRoundStatus();
        if (roundStatus === turn) {
            return 1;
        } else if (roundStatus === "XO") {
            return 0;
        } else if (roundStatus === "") {
            return "";
        } else {
            return -1;
        }
    }

    getNextMovePosition(turn, move) {
        const bestMove = this.getBestMove(turn, move);
        for (let row in bestMove) {
            for (let col in bestMove[row]) {
                if (bestMove[row][col] !== move[row][col]) {
                    return [row, col];
                }
            }
        }
        return bestMove;
    }

    getBestMove(turn, move) {
        const cpuMoves = this.getAllPossibleMoves(turn, move);
        const opponentMoves = this.getAllPossibleMoves(
            turn === "X" ? "O" : "X",
            move
        );

        for (let move of cpuMoves) {
            if (this.getMoveScore(turn, move) === 1) {
                return move;
            }
        }
        for (let i in cpuMoves) {
            if (
                this.getMoveScore(turn, cpuMoves[i]) !==
                this.getMoveScore(turn, opponentMoves[i])
            ) {
                return cpuMoves[i];
            }
        }
        if (cpuMoves.length === 0) {
            return move;
        } else {
            return cpuMoves[Math.floor(Math.random() * cpuMoves.length)];
        }
    }

    getAllPossibleMoves(turn, move) {
        const moves = [];
        let newBoard;

        for (let row in move) {
            for (let col in move[row]) {
                if (move[row][col] === "") {
                    newBoard = this.copyBoard(move);
                    newBoard[row][col] = turn;
                    moves.push(newBoard);
                }
            }
        }
        return moves;
    }

    copyBoard(board) {
        const newBoard = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];

        for (let row in board) {
            for (let col in board[row]) {
                newBoard[row][col] = board[row][col];
            }
        }
        return newBoard;
    }
}
