export class Player {
    constructor(game) { // Update and Draw Player's Car //
        this.game = game;
        this.width = 60; // Image width of the F1 car //
        this.height = 97; // Image height of the F1 car //
        this.x = 450; // Position of player's car //
        this.y = 600; // Position of player's car //
        this.image = document.getElementById('playerCar');
        this.speed = 0;
        this.speedOnKerbs = 0.05;
        this.maxSpeed = 1.2;
    }
    update(input) {
        this.checkCollision();
        this.x += this.speed; // speed + key assign //
        if(input.includes('ArrowRight')) {
            if (this.x < 270) { // daca este pe kerb stanga scadem viteza //
                this.maxSpeed = this.speedOnKerbs;
            } else if (this.x > 270 && this.x < 630) {
                this.maxSpeed = 1.2;
            }
            this.speed = this.maxSpeed;
            ++this.x;
        } else if (input.includes('ArrowLeft')) {
            if (this.x > 630) {  // daca este pe kerb dreapta scadem viteza //
                this.maxSpeed = this.speedOnKerbs;
            } else if (this.x > 270 && this.x < 630) {
                this.maxSpeed = 1.2;
            }
            this.speed = -this.maxSpeed;
            --this.x;
        } else { // daca nu suntem pe kerb viteza revine la loc //
            this.speed = 0; 
            this.maxSpeed = 1.2;
        }
        this.borders();
    }
    draw(context) {
        if (this.game.enableHitBox === true) { // hitbox //
            context.strokeRect(this.x , this.y, this.width, this.height);
        }
        context.drawImage(this.image, this.x, this.y);
    }
    borders() { // border to the left and right //
        if (this.x < 250) { 
            return this.x = 250;
        } else if (this.x > 690) {
            return this.x = 690;
        }
    }
    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if (enemy.x < this.x + this.width && enemy.x + enemy.width > this.x && enemy.y < this.y + this.height && enemy.y + enemy.height > this.y) {
                this.game.stop = 1;
            }
        });
    }
}
