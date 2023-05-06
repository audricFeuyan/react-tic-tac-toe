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