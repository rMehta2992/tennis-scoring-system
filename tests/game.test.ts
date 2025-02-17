import { Game } from '../src/models/game';

describe('Game', () => {
    test('Initial score', () => {
        const game = new Game("player 1", "player 2");
        expect(game.getScore()).toBe("0-0");
    });

    test('Simple game progression', () => {
        const game = new Game("player 1", "player 2");
        game.pointWonBy("player 1");
        game.pointWonBy("player 2");
        expect(game.getScore()).toBe("15-15");

        game.pointWonBy("player 1");
        game.pointWonBy("player 1");
        expect(game.getScore()).toBe("40-15");
    });

    test('Deuce and advantage', () => {
        const game = new Game("player 1", "player 2");
        game.pointWonBy("player 1");
        game.pointWonBy("player 2");
        game.pointWonBy("player 1");
        game.pointWonBy("player 2");
        game.pointWonBy("player 1");
        game.pointWonBy("player 2");
        expect(game.getScore()).toBe("Deuce");

        game.pointWonBy("player 1");
        expect(game.getScore()).toBe("Advantage player 1");

        game.pointWonBy("player 1");
        expect(game.getScore()).toBe("player 1 wins the game");
    });
});
