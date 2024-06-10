export class GameHelper {
    constructor(board) {
        this.board = board;
    }

    getRoundStatus() {
        // Check horizontal winning status
        if (
            this.board[0][0] !== "" &&
            this.board[0][0] === this.board[0][1] &&
            this.board[0][1] === this.board[0][2]
        ) {
            return this.board[0][0];
        }
        if (
            this.board[1][0] !== "" &&
            this.board[1][0] === this.board[1][1] &&
            this.board[1][1] === this.board[1][2]
        ) {
            return this.board[1][0];
        }
        if (
            this.board[2][0] !== "" &&
            this.board[2][0] === this.board[2][1] &&
            this.board[2][1] === this.board[2][2]
        ) {
            return this.board[2][0];
        }
        // Check vertical winning status
        if (
            this.board[0][0] !== "" &&
            this.board[0][0] === this.board[1][0] &&
            this.board[1][0] === this.board[2][0]
        ) {
            return this.board[0][0];
        }
        if (
            this.board[0][1] !== "" &&
            this.board[0][1] === this.board[1][1] &&
            this.board[1][1] === this.board[2][1]
        ) {
            return this.board[0][1];
        }
        if (
            this.board[0][2] !== "" &&
            this.board[0][2] === this.board[1][2] &&
            this.board[1][2] === this.board[2][2]
        ) {
            return this.board[0][2];
        }

        // Check diagonal winning status
        if (
            this.board[0][0] !== "" &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]
        ) {
            return this.board[0][0];
        }

        if (
            this.board[0][2] !== "" &&
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0]
        ) {
            return this.board[0][2];
        }
        return this.isRoundTied() ? "XO" : "";
    }

    isRoundTied() {
        for (let row in this.board) {
            for (let col in this.board[row]) {
                if (this.board[row][col] === "") return false;
            }
        }
        return true;
    }
}
