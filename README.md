# tennis-match

## Overview
This project is a tennis scoring system developed in TypeScript. The system simulates a tennis match with a single set, following the standard tennis scoring rules, including handling deuce, advantage, and tie-break scenarios.


## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/rMehta2992/tennis-match.git
    cd tennis-match
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Simulation
To run the dynamic simulation of the tennis match, execute the following command:
```bash
npx ts-node src/app.ts
```

## Running the Tests
npm test


## Example Usage
The app.ts file simulates a tennis match dynamically. Here is an example of the expected output:
player 1 won the point
Current score: 0-0, 15-0
player 2 won the point
Current score: 0-0, 15-15
...
Match is over! The winner is player 1.


## Folder Structure 
tennis-scoring-system/
├── src/
│   ├── models/
│   │   ├── game.ts
│   │   ├── set.ts
│   │   └── match.ts
│   ├── app.ts
│   └── utils/
│       └── errorHandler.ts
├── tests/
│   ├── game.test.ts
│   ├── set.test.ts
│   └── match.test.ts
├── jest.config.js
├── package.json
└── tsconfig.json


## Class Diagram
classDiagram
    class Match {
        -player1: string
        -player2: string
        -currentSet: TennisSet
        +pointWonBy(player: string): void
        +score(): string
    }

    class TennisSet {
        -player1: string
        -player2: string
        -games: Game[]
        -player1GamesWon: number
        -player2GamesWon: number
        -tieBreak: boolean
        -tieBreakScore: { [key: string]: number }
        +pointWonBy(player: string): void
        +isCurrentGameOver(): boolean
        +getSetScore(): string
        +getCurrentGameScore(): string
        -checkForTieBreak(): void
        -endTieBreak(winner: string): void
        -getOpponent(player: string): string
    }

    class Game {
        -player1: string
        -player2: string
        -player1Points: number
        -player2Points: number
        +pointWonBy(player: string): void
        +isGameOver(): boolean
        +winner(): string | null
        +getScore(): string
    }

    Match --> TennisSet
    TennisSet --> Game
