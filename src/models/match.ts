import { TennisSet } from './set';

export class Match {
    player1: string;
    player2: string;
    currentSet: TennisSet;

    constructor(player1: string, player2: string) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentSet = new TennisSet(player1, player2);
    }

    pointWonBy(player: string): void {
        if (player !== this.player1 && player !== this.player2) {
            console.error(`Invalid player name: ${player}`);
            return;
        }
        this.currentSet.pointWonBy(player);
    }

    score(): string {
        const setScore = this.currentSet.getSetScore();
        const gameScore = this.currentSet.getCurrentGameScore();

        // Check if the current game is over
        if (this.currentSet.isCurrentGameOver()) {
            return setScore;
        } else {
            return `${setScore}, ${gameScore}`;
        }
    }
}

export default Match;
