let songlist = 
  [
    'Summer', 
    'No Fear',
    'TiK ToK',
    'Espresso',
    'YA YA',
    'vampire',
    'Text Me When You Get Home',
    'Kiss the Ladder',
    'Misty',
    'Obsessed',
    'Baby',
    'Not Like Us',
    'My Finest Hour',
    'Hot To Go',
    'Something About You - Eyedress Dent May',
    'Notion - The Rare Occasions',
    'Espresso',
    'Too Sweet',
    'Cinnamon Girl',
    'Chihiro',
    'the boy is mine',
    'Saturn',
    'Latch',
    'Please Please Please',
    'Fake Love',
    'Heat Waves',
    'Good Luck Babe',
    'Moon Undah Water',
    'bellyache'
  ];

let index = 0;
let y_value = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(300);
  fill("red");
  textSize(40);
  text("The top songs of the summer are...", 10, 30)
}

function draw() {
  frameRate(2);
  fill("blue");
  textSize(34);
  let x_value = random(10, 300);
  
  text(songlist[index], x_value, y_value);
  y_value += 30;
  index += 1;
  
  if (index == songlist.length){
    noLoop();
  }
}
