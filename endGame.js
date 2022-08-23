export class EndGame {
    constructor(game) {
        this.game = game;
        this.fontSize = 50;
        this.fontStyle = 'Helvetica';
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontStyle;
        context.textAlign = 'center';
        context.fillStyle = this.game.fontColorEndGame;
        context.fillText("Game Over!", 500, 400);
        context.font = this.fontSize - 20 + 'px ' + this.fontStyle;
        context.fillText("Your final score is: " + this.game.score, 500, 430);
        context.fillText("Press Enter to restart. ", 500, 460);
    }
}