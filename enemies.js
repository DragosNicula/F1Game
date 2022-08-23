class Enemy {
    constructor() {
        this.outOfScreenEnemies = false; // cand ajunge in afara ecranului se sterge din sir //
    }
    update() { 
        this.y += this.speed;
        if (this.y > 800) {
            this.outOfScreenEnemies = true;
            ++this.game.score;
        }
    }
    draw(context) {
        if (this.game.enableHitBox === true) { // hitbox //
            context.strokeRect(this.x , this.y, this.width, this.height);
        }
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export class EnemyYellow extends Enemy {
    constructor(game) {
        super(); // foloseste tot ce e in constructor //
        this.game = game;
        this.width = 60;
        this.height = 97;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.y = -150;
        this.speed = 1;
        this.image = document.getElementById("enemyYellow")
    }
    update() {
        super.update();
    }
}
export class EnemyBlue extends Enemy {
    constructor(game) {
        super(); // foloseste tot ce e in constructor //
        this.game = game;
        this.width = 60;
        this.height = 97;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.y = -150;
        this.speed = 2;
        this.image = document.getElementById("enemyBlue")
    }
    update() {
        super.update();
    }
}
export class EnemyGreen extends Enemy {
    constructor(game) {
        super(); // foloseste tot ce e in constructor //
        this.game = game;
        this.width = 60;
        this.height = 97;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.y = -150;
        this.speed = 3;
        this.image = document.getElementById("enemyGreen")
    }
    update() {
        super.update();
    }
}