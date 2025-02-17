import { Game } from './game';

export class TennisSet {
    player1: string;
    player2: string;
    games: Game[];
    player1GamesWon: number;
    player2GamesWon: number;
    tieBreak: boolean;
    tieBreakScore: { [key: string]: number };

    constructor(player1: string, player2: string) {
        this.player1 = player1;
        this.player2 = player2;
        this.games = [new Game(player1, player2)];
        this.player1GamesWon = 0;
        this.player2GamesWon = 0;
        this.tieBreak = false;
        this.tieBreakScore = { [player1]: 0, [player2]: 0 };
    }

    pointWonBy(player: string): void {
        if (this.tieBreak) {
            this.tieBreakScore[player]++;
            if (this.tieBreakScore[player] >= 7 && Math.abs(this.tieBreakScore[player] - this.tieBreakScore[this.getOpponent(player)]) >= 2) {
                this.endTieBreak(player);
            }
        } else {
            const currentGame = this.games[this.games.length - 1];
            currentGame.pointWonBy(player);
            if (currentGame.isGameOver()) {
                if (currentGame.winner() === this.player1) {
                    this.player1GamesWon++;
                } else {
                    this.player2GamesWon++;
                }
                this.checkForTieBreak();
                this.games.push(new Game(this.player1, this.player2));
            }
        }
    }

    isCurrentGameOver(): boolean {
        return this.games[this.games.length - 1].isGameOver();
    }

    getSetScore(): string {
        return `${this.player1GamesWon}-${this.player2GamesWon}`;
    }

    getCurrentGameScore(): string {
        if (this.tieBreak) {
            return `${this.tieBreakScore[this.player1]}-${this.tieBreakScore[this.player2]}`;
        } else {
            return this.games[this.games.length - 1].getScore();
        }
    }

    private checkForTieBreak(): void {
        if (this.player1GamesWon === 6 && this.player2GamesWon === 6) {
            this.tieBreak = true;
        }
    }

    private endTieBreak(winner: string): void {
        if (winner === this.player1) {
            this.player1GamesWon++;
        } else {
            this.player2GamesWon++;
        }
        this.tieBreak = false;
    }

    private getOpponent(player: string): string {
        return player === this.player1 ? this.player2 : this.player1;
    }
}
