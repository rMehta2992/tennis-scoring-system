import Match from '../src/models/match';

describe('Match', () => {
    test('Initial match score', () => {
        const match = new Match("player 1", "player 2");
        expect(match.score()).toBe("0-0, 0-0");
    });

    test('Simple match progression', () => {
        const match = new Match("player 1", "player 2");
        match.pointWonBy("player 1");
        match.pointWonBy("player 2");
        expect(match.score()).toBe("0-0, 15-15");

        match.pointWonBy("player 1");
        match.pointWonBy("player 1");
        expect(match.score()).toBe("0-0, 40-15");
    });

    test('Deuce and advantage scenario', () => {
        const match = new Match("player 1", "player 2");
        match.pointWonBy("player 1");
        match.pointWonBy("player 2");
        match.pointWonBy("player 1");
        match.pointWonBy("player 2");
        match.pointWonBy("player 1");
        match.pointWonBy("player 2");
        expect(match.score()).toBe("0-0, Deuce");

        match.pointWonBy("player 1");
        expect(match.score()).toBe("0-0, Advantage player 1");

        match.pointWonBy("player 1");
        expect(match.score()).toBe("1-0, 0-0");
    });

    test('Set progression', () => {
        const match = new Match("player 1", "player 2");
        for (let i = 0; i < 4; i++) match.pointWonBy("player 1");
        expect(match.score()).toBe("1-0, 0-0");

        for (let i = 0; i < 4; i++) match.pointWonBy("player 2");
        expect(match.score()).toBe("1-1, 0-0");
    });

    test('Invalid player name', () => {
        const match = new Match("player 1", "player 2");
        console.error = jest.fn();

        match.pointWonBy("invalid player");
        expect(console.error).toHaveBeenCalledWith("Invalid player name: invalid player");
    });
});
