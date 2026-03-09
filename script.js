const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
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
  this.load.bitmapFont('dot', 'dotfont.png', 'dotfont.xml');

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

  const buttonAb = this.add.rectangle(0,0,210,70,0xffff10)
  const buttonA = this.add.rectangle(0,0,200,60,0xffffbb)
  const texta = this.add.bitmapText(0,-10,'dot','start',64)
    .setOrigin(0.5)
    .setTint(0x000000);
  const btn = this.add.container(width/2 -150, height/5*4, [buttonAb,buttonA, texta]);
  buttonA.setInteractive();

  let buttonB = this.add.image(width / 2 + 150, height / 5 * 4, 'btnB')
    .setScale(200 / this.textures.get('btnA').getSourceImage().width)
    .setInteractive();

  let text1 = this.add.bitmapText(200,100,'dot','Build',64)
    .setTint(0x000000);
  let text2 = this.add.bitmapText(260,170,'dot','Up!',64)
    .setTint(0x000000);
  
  function switchToB() {

    buttonA.destroy();
    buttonB.destroy();
    text1.destroy();
    text2.destroy();

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
