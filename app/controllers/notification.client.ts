export enum Sound {
    "join" = "join",
    "leave" = "leave",
    "start" = "start",
    "end" = "end",
    "turn" = "turn",
    "win" = "win",
    "lose" = "lose",
    "draw" = "draw",
    "error" = "error",
    "shuffle" = "shuffle",
    "winner" = "winner",
}
export class NotificationController {
    private sounds: { [key in keyof typeof Sound]: HTMLAudioElement } = {
        join: this.setup("/audio/player-join.wav"),
        leave: this.setup("/audio/player-leave.wav"),
        start: this.setup("/audio/player-join.wav"),
        end: this.setup("/audio/player-join.wav"),
        turn: this.setup("/audio/player-turn.wav"),
        win: this.setup("/audio/player-join.wav"),
        lose: this.setup("/audio/player-join.wav"),
        draw: this.setup("/audio/card-draw.mp3"),
        error: this.setup("/audio/player-join.wav"),
        shuffle: this.setup("/audio/shuffle-card.mp3"),
        winner: this.setup("/audio/winner.wav"),
    };

    private setup(src: string) {
        const audio = new Audio(src);
        audio.loop = false;
        return audio;
    }
    public play(name: keyof typeof Sound) {
        this.sounds[name].play();
    }
}
