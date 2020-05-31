let x = 0;
let mic, fft;
let angle = 0;
let slider;
let button;

let r = 10;
let bc = 0
function setup() {
  // 最初に一回だけ実行される処理
  createCanvas(windowWidth, windowHeight)
  noStroke()

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT()
  fft.setInput(mic)
  background(0)


  slider = createSlider(0, 100, 30)
  slider.position(100, 20)

  button = createButton('flesh')
  button.position(100, 40)
  button.mousePressed(function() {
    if (bc == 0) {
      bc = 'skyblue'
    } else {
      bc = 0
    }
  })
}

function draw() {
  background(bc)
   // 繰り返し実行される処理
   let vol = mic.getLevel()

   rectMode(RADIUS)
   rect(x, 40, 10, 10)
   ellipse(width/2, height/2, 50 * slider.value() / 100, 100)
   line(0, height, width/2, height/2)
  //  fill('black')
   // stroke('white')
   // strokeWeight(3)
   textAlign(LEFT, TOP)
   textSize(32)
   textFont('Impact')
   textStyle(BOLD)
   text('hellow world', 100, 100)
   // noStroke()
  //  noFill()
 push();
 translate(10)
 rotate(PI/4)
 let radius;
 if (vol > 0.3) {
  radius = vol * 10000
 } else {
  radius = vol * 100
 }
 rotate(radians(radius))
 scale(2, 0.5)
 fill(0,  0, 255, 127)
 rect(0, 0, 50, 50)
 pop()


   push();
   if(mouseIsPressed) {
     fill('white')
   } else {
     fill('pink')
   }
   // ellipse(mouseX, mouseY, vol * 4000, vol * 4000)
   ellipse(vol * random(width) * 10, vol * random(height) * 10, vol * 200, vol * 200)
   pop();



   push()
   // x = width * vol * 10 + r
   // y = height * vol * 50
   if (vol > 0.5) {
     // r = random(50, 80)
     r = vol * 1000
   } else {
     // r = random(10, 30)
     r = vol * 500
   }

   x = random(width)
   y = random(height)
   // if (random() > 0.9){
   //   r = random(50, 80)
   // } else {
   //   r = random(10, 30)
   // }

   fill(255, 255, 255, random(30, 250))
   ellipse(x, y, r,r)
   pop()

  push()
  translate(width/2, height/2)
  p = 100;
  h = 10;
  if (vol > 0.05) {
    p = 140 * vol * 20
  }
  xp = sin(radians(angle))  * p
  yp = cos(radians(angle))  * p
  ellipse(xp, yp, h, h)
  pop()
  angle += 2
}

// function mousePressed() {
//   r += 10;
//   return false;
// }


function keyTyped() {
  if (key == 'u') {
    r -= 5
  }
  // text(key, 100, 100)
  return false;
}

function touchStarted() {
  getAudioContext().resume()
}


// function keyPressed() {
//   if (keyCode == UP_ARROW) {
//     r += 10;
//   }

//   return false;
// }

/*

色： bacckground(n1, n2, n3, n4)

n: グレースケール 0~255

n1, n2, n3:
 RGB: background(255, 0, 0)
 HSB: colorMode(HSB, 100); background(50, 100, 80, 50)

css:
 background('#fff')
 background('rgb(255, 0, 0)')

*/


/*
長方形:
rectMode(CORNER)  // default
rect(x, y, w, h)

rectMode(CORNERS)
rect(x1, y1, x2, y2)

rectMode(CENTER)
rect(cx, cy, w, h)

rectMode(RADIUS)
rect(cx, cy, w/2, h/2)


width, height: 
描画領域の高さと横幅を変数として取得できる

*/



/*
楕円：

ellipseMode(CENTER) // default 
ellipse(cx, cy, w, h)

ellipseMode(RADIUS) 
ellipse(cx, cy, w/2, h/2)

ellipseMode(CORNER) 
ellipse(x1, y1, w, h)

ellipseMode(CORNERS) 
ellipse(x1, y1, x2, y2)

*/

/*

直線:
line(x1, y1, x2, y2)

点：
point()

円弧：
arc()

三角形：
triangle()

*/


/*
塗り:
fill('pink')

var c = color('pink')
fill(c)

無色： noFill()

線:
stroke(color)
strokeWeight(5)

無線：noStroke()

*/

/*
テキスト

text(s, x, y, w, h)

座標の位置を指定：
  textAlign(LEFT, TOP)
テキストサイズ：
  textSize(32)
フォント：
  textFont('Impact')
スタイルの指定：
  textStyle(BOLD)
 
 */


/*
図形の変更:
push ~ pop 内で囲った図形に対して、変形命令を指定する
push ~ pop でスタイルなどの空間を閉じれる

push();
translate(10, 10)
rotate(PI/4)
rotate((radians(30))
scale(2, 0.5)
fill(0,  0, 255, 127)
rect(0, 0, 100, 100)
pop()


位置をずらす
translate(x, y)

角度をずらす:
rotate(PI/4)  // PI / 4 = 180 / 4 = 45
rotate((radians(45))

大きさを変更する：
scale(x, y)

*/


/*
マウスとのインタラクション

位置：
定数 mouseX, mouseY で取得できる

クリック状態：
mouseIsPressed // true or false

クリック時のアクション：
function mousePressed() {}
default の操作を無効化するには返り値に false を返す
 */


 /*
 キー入力

 キータイプ状態:
 keyIsPressed // true or false

どのキーなのか:
 key: 通常キー
 keyCode: 特殊キー ALT/CMD/SHIFT etc

キータイプ時のアクション：
 function keyTyped(): 特殊キーを無視
 function keyPressed(): 大文字小文字を区別しない

 */


 /*
 乱数
 random() 0~1
 random(n) 0~n
 random(n, m) n~m

 */


 /*
 sin, cos
  angle = 0;
  x = sin(radians(angle)) * 100
  y = cos(radians(angle)) * 100
  ellipse(xp, yp, 50, 50)
  angle += 2
 */


 /*
 dom
 html で p5.dom-min.js をimport


 スライダー:
 slider = createSlider(min, max, init)
 slider.position(x, y)

 slider.value() // 値取得


 ボタン：
  button = createButton('text')
  button.position(x, y)
  button.mousePressed(function() {
    callback
  })
 */