export class PlayerInput {
    constructor(game) {
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => { // fiecare event (tasta apasata) este si ea la randul ei un event //
            if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && this.keys.indexOf(e.key) === -1) { // daca apasam arrowdown sau up ==> va fi adaugata in "keys" array daca nu se afla deja ( -1 inseamna ca nu se afla in array) //
                this.keys.push(e.key); // il baga in array //
            } else if (e.key === 'h') { // hitbox on/off //
                this.game.enableHitBox = !this.game.enableHitBox;
            } else if (e.key === 'Enter') {
                window.location.reload();
            }
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                this.keys.splice(this.keys.indexOf(e.key), 1); // cand numai este apasata tasta => este scoasa din array //
            }
        });
    }
}