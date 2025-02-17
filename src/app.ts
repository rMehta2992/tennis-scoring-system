import Match from './models/match';

const match = new Match("player 1", "player 2");

// Function to simulate a point being won by a random player
function simulatePoint(): void {
    const players = ["player 1", "player 2"];
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    match.pointWonBy(randomPlayer);
    console.log(`${randomPlayer} won the point`);
}

// Function to check if the match is over
function isMatchOver(): boolean {
    const setScore = match.score().split(",")[0];
    const [player1Games, player2Games] = setScore.split("-").map(Number);
    return player1Games >= 6 && player1Games - player2Games >= 2 || player2Games >= 6 && player2Games - player1Games >= 2;
}

// Function to determine the winner
function getWinner(): string {
    const setScore = match.score().split(",")[0];
    const [player1Games, player2Games] = setScore.split("-").map(Number);
    return player1Games > player2Games ? "player 1" : "player 2";
}

// Simulate the match until a player wins
while (!isMatchOver()) {
    simulatePoint();
    console.log(`Current score: ${match.score()}`);
}

// Declare the winner
const winner = getWinner();
console.log(`Match is over! The winner is ${winner}.`);
