export interface PlayerState {
    score: number,
    playDuration: number,
    actualPlayState: Array<number>,
    mark: string
}

export interface PlayState {
    playPosition: number,
    duration: number
}

export enum EnumActualPlayer {
    PlayerOne = "X",
    PlayerTwo = "O"
}
export interface GameState {
    party: number,
    actualPlayer: EnumActualPlayer
    totalPartyDuration: number,
    playerOneWins: number,
    playerTwoWins: number,
    actualStep: number,
}