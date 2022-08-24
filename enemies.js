class Enemy {
    constructor() {
        this.outOfScreenEnemies = false; // when outside of the screen we delete it //
        this.width = 60;
        this.height = 97;
        this.y = -150;
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
        super(); // we use everything what is in the constructor from above //
        this.game = game;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.speed = 1;
        this.image = document.getElementById("enemyYellow");
    }
    update() {
        super.update();
    }
}
export class EnemyBlue extends Enemy {
    constructor(game) {
        super(); // this uses everything from the main constructor //
        this.game = game;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.y = -150;
        this.speed = 2;
        this.image = document.getElementById("enemyBlue");
    }
    update() {
        super.update();
    }
}
export class EnemyGreen extends Enemy {
    constructor(game) {
        super(); //  this uses everything from the main constructor //
        this.game = game;
        this.x = Math.floor(Math.random() * (690 - 250) + 1) + 250;
        this.y = -150;
        this.speed = 3;
        this.image = document.getElementById("enemyGreen");
    }
    update() {
        super.update();
    }
}