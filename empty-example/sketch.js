// let mic;
// let fr = 300;

// function setup() {
//   // put setup code here

//   createCanvas(windowWidth, windowHeight);

//   frameRate(fr);
//   mic = new p5.AudioIn();
//   mic.start();{}
// }

// function draw() {
//   background(10);
//   fr = 30;
//   var vol = mic.getLevel();
//   let circleScale = 100;
//   if (vol > 0) {
//     // circleScale = vol * 4000;
//   }

//   // ellipse(500, 500, circleScale, circleScale)
//     let y = height / 2 - vol * height * 5;
//     ellipse(frameCount, y, circleScale, circleScale);
//     // ellipse(frameCount*3.3%width,frameCount*2.5%height, circleScale, circleScale);
// }

let mic, fft;
let vols = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);

  let spectrum = fft.analyze();
  let vol = mic.getLevel();

  // vols.push(vol);

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  beginShape();
  // for (i = 0; i < vols.length; i++) {
  //   vertex(100, map(vols[i] * 100, 0, 255, height/2, 0));
  // }
  //   vertex(100, map(vols[i], 0, 255, height/2, 0));
  for (i = 0; i < spectrum.length; i++) {
    vertex(i + 300, map(spectrum[i], 0, 255, height/2 - 100, 0));
  }
  endShape();

  let circleScale = 100;
  if (vol > 0) {
    circleScale = vol * 4000;
  }

  // ellipse(500, 500, circleScale, circleScale)
  let y = height / 2 - vol * height * 5;
  ellipse(width/2, height/2 - 50, circleScale, circleScale);
}


function touchStarted() {
  getAudioContext().resume()
}

// function draw() {
//   // put drawing code here
//   background(1000);


//   /*ライトの設定。マウスの位置で光の方向が変化*/
//   var locY = (mouseY / height - 0.5) * (-2);
//   var locX = (mouseX / width - 0.5) * 2;

//   ambientLight(100, 80, 80);
//   pointLight(200, 200, 200, locX, locY, 0);

//   /*Yを少しずつ回転。*/
//   rotateY(frameCount * 0.0001);
//   //ドラック対応
//   orbitControl();

//   for(var j = 0; j < 10; j++){
//     push();
//     for(var i = 0; i < 100; i++){
//       translate(sin(frameCount * 0.001 + j) * 200, sin(frameCount * 0.001 + j) * 300, i * 0.1);
//       rotateZ(frameCount * 0.002);
//       push();
//       /*プリミティブの作成*/
//       sphere(2, 10, 100); 
//       pop();
//     }
//     pop();
//   }
// }

// let audio;
// let level;


// function preload() {
//  audio = loadSound("./test.mp3"); 
  
// }

// function setup() { 
//   createCanvas(400, 400);

//   level = new p5.Amplitude();
// } 

// function draw() { 
//   background(220);
  
//   var panValue = map(mouseX, 0, width, -1, 1);
//   print(panValue);
//   audio.pan(panValue);
  
//   var speed = map(mouseY, 0, height, 0, 4);
//   audio.rate(speed);  
  
//   if (!audio.isPlaying()) {
//    audio.play(); 
//   }
  
//   ellipse(width/2, height/2, level.getLevel()*1000, level.getLevel()*1000);
// }

// function mousePressed() {
//  audio.play(); 
// }