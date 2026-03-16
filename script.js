//game.scene.scenes[0].scene.restart();
//64-20,48-15
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
  this.load.image('bgA', 'image/backr.png');
  this.load.image('bgB', 'image/backb.png');
  this.load.image('btnA', 'image/buttona.png');
  this.load.image('btnB', 'image/buttonb.png');
  this.load.image('mod1','image/mod1.png');
  this.load.bitmapFont('dot', 'dotfont.png', 'dotfont.xml');

}

function create() {

  const width = this.scale.width;
  const height = this.scale.height;

  let bgA = this.add.image(0,0,'bgA')
    .setOrigin(0)
    .setDisplaySize(width, height)
    .setAlpha(1);

  let bgB = this.add.image(0,0,'bgB')
    .setOrigin(0)
    .setDisplaySize(width, height)
    .setAlpha(0);

  const buttonAb = this.add.rectangle(0,0,210,70,0xffff10)
  const buttonA = this.add.rectangle(0,0,200,60,0xffffbb)
  const texta = this.add.bitmapText(0,-14,'dot','Setting',48)
    .setOrigin(0.5)
    .setTint(0x000000);
  const btna = this.add.container(width/2 -150, height/5*4, [buttonAb,buttonA, texta]);
  buttonA.setInteractive();

  const buttonBb = this.add.rectangle(0,0,210,70,0xffff10)
  const buttonB = this.add.rectangle(0,0,200,60,0xffffbb)
  const textb = this.add.bitmapText(0,-14,'dot','Start',48)
    .setOrigin(0.5)
    .setTint(0x000000);
  const btnb = this.add.container(width/2 +150, height/5*4, [buttonBb,buttonB, textb]);
  buttonB.setInteractive();

  function switchToB() {

    btna.destroy();
    btnb.destroy();

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

    const mod1 = this.add.image(width / 2,height / 2,'mod1');
  }

  buttonA.on('pointerdown', switchToB, this);
  buttonB.on('pointerdown', switchToB, this);
}
