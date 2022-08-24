import { Player } from './player.js';
import { PlayerInput } from './input.js';
import { createBoard } from './createBoard.js';
import { EnemyBlue, EnemyGreen, EnemyYellow } from './enemies.js';
import { Score } from './score.js';
import { EndGame } from './endGame.js';
import { SmallTree, LargeTree, AppleTree } from './trees.js';

window.addEventListener('load', function() { // waits for all the images to load than it starts //
  const board = document.getElementById("f1");
  const ctx = board.getContext("2d"); // we import methods of drawing to this variable //
  board.height = 800;
  board.width = 1000;

  class Game { // brain of the game //
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this); // (this) reffers to game object -> from the Player's constructor //
      this.input = new PlayerInput(this);
      this.scoreUpdate = new Score(this);
      this.endGame = new EndGame(this);
      this.trees = [];
      this.enemies = [];
      this.enemyTimer = 0;
      this.enemyInterval = 1000; 
      this.enableHitBox = false; // hitbox //
      this.fontColorScore = 'white';
      this.fontColorEndGame = 'red';
      this.score = 0;
      this.stop = 0;
    }
    update() { // updates everyframe //
      if(this.stop === 0) {
        this.player.update(this.input.keys);
        if (this.enemyTimer > this.enemyInterval) { // adding enemies + tress //
          this.addEnemy();
          this.addTrees();
          this.enemyTimer = 0;
        } else {
          this.enemyTimer += 10;
        }
        this.enemies.forEach(enemy => {
          enemy.update();
          if (enemy.outOfScreenEnemies === true) { // if the enemy car is out of the screen we remove it from the array //
            this.enemies.splice(this.enemies.indexOf(enemy), 1);
          }
        });
        this.trees.forEach(trees => {
          trees.update();
          if (trees.outOfScreenTrees === true) {
            this.trees.splice(this.trees.indexOf(trees), 1);
          }
        })
      }
    }
    draw(context) { // draw every frame //
      this.player.draw(context);
      this.enemies.forEach(enemy => {
        enemy.draw(context);
      });
      this.trees.forEach(trees => {
        trees.draw(context);
      });
      this.scoreUpdate.draw(context);
      if (this.stop === 1) {
        this.endGame.draw(context);
      };
    }
    addEnemy() {
      let color = Math.floor(Math.random() * 3);
      if (color === 0) {
        this.enemies.push(new EnemyGreen(this));
      } else if (color === 1) {
        this.enemies.push(new EnemyBlue(this));
      } else if (color === 2) {
        this.enemies.push(new EnemyYellow(this));
      }
    }
    addTrees() {
      let treeType = Math.floor(Math.random() * 3);
      if (treeType === 0) {
        this.trees.push(new SmallTree(this));
      } else if (treeType === 1) {
        this.trees.push(new LargeTree(this));
      } else if (treeType === 2) {
        this.trees.push(new AppleTree(this));
      }
    }
  }

  const game = new Game(board.width, board.height);

  function animate() {
    ctx.clearRect(0, 0, board.width, board.height);
    createBoard(ctx);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});