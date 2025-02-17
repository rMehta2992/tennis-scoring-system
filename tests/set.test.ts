import { TennisSet } from '../src/models/set';

describe('TennisSet', () => {
    test('Initial set score', () => {
        const tennisSet = new TennisSet("player 1", "player 2");
        expect(tennisSet.getSetScore()).toBe("0-0");
    });

    test('Set progression', () => {
        const tennisSet = new TennisSet("player 1", "player 2");
        tennisSet.pointWonBy("player 1");
        tennisSet.pointWonBy("player 1");
        tennisSet.pointWonBy("player 1");
        tennisSet.pointWonBy("player 1");
        expect(tennisSet.getSetScore()).toBe("1-0");
    });

    test('Current game score', () => {
        const tennisSet = new TennisSet("player 1", "player 2");
        tennisSet.pointWonBy("player 1");
        tennisSet.pointWonBy("player 2");
        expect(tennisSet.getCurrentGameScore()).toBe("15-15");
    });
});
