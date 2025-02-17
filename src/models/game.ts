export class Game {
    player1: string;
    player2: string;
    player1Points: number;
    player2Points: number;

    constructor(player1: string, player2: string) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Points = 0;
        this.player2Points = 0;
    }

    pointWonBy(player: string): void {
        if (player === this.player1) {
            this.player1Points++;
        } else {
            this.player2Points++;
        }
    }

    isGameOver(): boolean {
        if ((this.player1Points >= 4 || this.player2Points >= 4) &&
            Math.abs(this.player1Points - this.player2Points) >= 2) {
            return true;
        }
        return false;
    }

    winner(): string | null {
        if (this.isGameOver()) {
            return this.player1Points > this.player2Points ? this.player1 : this.player2;
        }
        return null;
    }

    getScore(): string {
        const scoreMap = [0, 15, 30, 40];
        if (this.player1Points < 4 && this.player2Points < 4 && this.player1Points !== this.player2Points) {
            return `${scoreMap[this.player1Points]}-${scoreMap[this.player2Points]}`;
        } else if (this.player1Points === this.player2Points) {
            if (this.player1Points >= 3) return 'Deuce';
            else return `${scoreMap[this.player1Points]}-${scoreMap[this.player2Points]}`;
        } else {
            const leader = this.player1Points > this.player2Points ? this.player1 : this.player2;
            if (Math.abs(this.player1Points - this.player2Points) === 1) {
                return `Advantage ${leader}`;
            } else {
                return `${leader} wins the game`;
            }
        }
    }
}
