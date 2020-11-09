/**
 * Design Tic-Tac-Toe
 *
 * Design a Tic-tac-toe game that is played between two players on a n x n grid.
 *
 * You may assume the following rules:
 *
 * A move is guaranteed to be valid and is placed on an empty block.
 * Once a winning condition is reached, no more moves is allowed.
 * A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
 *
 * Example:
 *
 * Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.
 *
 * TicTacToe toe = new TicTacToe(3);
 *
 * toe.move(0, 0, 1); -> Returns 0 (no one wins)
 * |X| | |
 * | | | |    // Player 1 makes a move at (0, 0).
 * | | | |
 *
 * toe.move(0, 2, 2); -> Returns 0 (no one wins)
 * |X| |O|
 * | | | |    // Player 2 makes a move at (0, 2).
 * | | | |
 *
 * toe.move(2, 2, 1); -> Returns 0 (no one wins)
 * |X| |O|
 * | | | |    // Player 1 makes a move at (2, 2).
 * | | |X|
 *
 * toe.move(1, 1, 2); -> Returns 0 (no one wins)
 * |X| |O|
 * | |O| |    // Player 2 makes a move at (1, 1).
 * | | |X|
 *
 * toe.move(2, 0, 1); -> Returns 0 (no one wins)
 * |X| |O|
 * | |O| |    // Player 1 makes a move at (2, 0).
 * |X| |X|
 *
 * toe.move(1, 0, 2); -> Returns 0 (no one wins)
 * |X| |O|
 * |O|O| |    // Player 2 makes a move at (1, 0).
 * |X| |X|
 *
 * toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
 * |X| |O|
 * |O|O| |    // Player 1 makes a move at (2, 1).
 * |X|X|X|
 *
 * Follow up:
 * Could you do better than O(n2) per move() operation?
 */

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
class TicTacToe {
    private _size: number;
    private _rows: any | Array<any>;
    private _columns: any[] | Array<any>;
    private _diagonal: number;
    private _antiDiagonal: number;    

    /***
     * @param {number} num
     */
    constructor(num: number) {
        this._size = num;
        this._rows = Array(num).fill(0);
        this._columns = Array(num).fill(0);
        this._diagonal = 0;
        this._antiDiagonal = 0;
    }

    /***
     * Player {player} makes a move at ({row}, {col})
     * @param {number} row The row of the board
     * @param {number} col The column of the board
     * @param {number} player The player, can be either 1 or 2
     * @return {number} Ther current winning condition, can be either:
     *  0: No one wins
     *  1: Player 1 wins
     *  2: Player 2 wins
     */
    move(row: number, col: number, player: number){
        const toAdd = player === 1 ? 1 : -1;
        
        this._rows[row] += toAdd;
        this._columns[col] += toAdd;

        if (row === col) {
            this._diagonal += toAdd;
        }

        if (col === this._size - 1 -row) {
            this._antiDiagonal += toAdd;
        }

        if (
            Math.abs(this._rows[row]) === this._size ||
            Math.abs(this._rows[col]) === this._size ||
            Math.abs(this._diagonal) === this._size ||
            Math.abs(this._antiDiagonal) === this._size
            ) {

                return player;
        }
        return 0;
    }
}

export default TicTacToe;