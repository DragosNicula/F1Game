class Tree {
    constructor() {
        this.outOfScreenTrees = false;
        this.width = 50;
        this.height = 50;
        this.y = -150;
        this.speed = 1.5;
    }
    update() {
        this.y += this.speed;
        if (this.y > 800) {
            this.outOfScreenTrees = true;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.xLeft, this.y, this.width, this.height);
        context.drawImage(this.image, this.xRight, this.y, this.width, this.height);
    }
}

export class SmallTree extends Tree {
    constructor(game) {
        super();
        this.game = game;
        this.xLeft = Math.floor(Math.random() + 200) + 1;
        this.xRight = Math.floor(Math.random() * (930 - 770) + 770);
        this.image = document.getElementById("smallTree");
    }
    update() {
        super.update();
    }
}

export class LargeTree extends Tree {
    constructor(game) {
        super();
        this.game = game;
        this.xLeft = Math.floor(Math.random() * 200) + 1;
        this.xRight = Math.floor(Math.random() * (930 - 770) + 770);
        this.image = document.getElementById("largeTree");
    }
    update() {
        super.update(); 
    }
}

export class AppleTree extends Tree {
    constructor(game) {
        super();
        this.game = game;
        this.xLeft = Math.floor(Math.random() * 200) + 1;
        this.xRight = Math.floor(Math.random() * (930 - 770) + 770);
        this.image = document.getElementById("appleTree");
    }
    update() {
        super.update(); 
    }
}