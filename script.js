const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('bgA', 'backr.png');
  this.load.image('bgB', 'backb.png');
  this.load.image('btnA', 'buttona.png');
  this.load.image('btnB', 'buttonb.png');
}

function create() {

  const width = this.scale.width;
  const height = this.scale.height;

  let bgA = this.add.image(0, 0, 'bgA')
    .setOrigin(0)
    .setDisplaySize(width, height)
    .setAlpha(1);

  let bgB = this.add.image(0, 0, 'bgB')
    .setOrigin(0)
    .setDisplaySize(width, height)
    .setAlpha(0);

  let buttonA = this.add.image(width / 2 - 150, height / 2, 'btnA')
    .setDisplaySize(150,60)
    .setInteractive();

  let buttonB = this.add.image(width / 2 + 150, height / 2, 'btnB')
    .setDisplaySize(150,60)
    .setInteractive();

  function switchToB() {

    buttonA.destroy();
    buttonB.destroy();

    this.tweens.add({
      targets: bgA,
      alpha: 0,
      duration: 500
    });

    this.tweens.add({
      targets: bgB,
      alpha: 1,
      duration: 500
    });
  }

  buttonA.on('pointerdown', switchToB, this);
  buttonB.on('pointerdown', switchToB, this);
}
