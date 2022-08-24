export class PlayerInput {
    constructor(game) {
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => { 
            if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && this.keys.indexOf(e.key) === -1) { 
                this.keys.push(e.key); 
            } else if (e.key === 'h') { // hitbox on/off //
                this.game.enableHitBox = !this.game.enableHitBox;
            } else if (e.key === 'Enter') { // enter for restarting the game //
                window.location.reload();
            }
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                this.keys.splice(this.keys.indexOf(e.key), 1); 
            }
        });
    }
}