const FRAME_RATE = 30
const fadeInDuration = FRAME_RATE * 3
const drawing_scalar = 6
const startFrame = 1 * drawing_scalar
let start2 = 0;
let start3 = 0;
const DURATION = FRAME_RATE * 10
let scale = 1.25
// these next 3 variables are determined by the text
const titleWidth = 600
const titleHeight = 480
const baselineTitleSpacing = 100
let AdditionalTitleSpacing = 0

// required offsets for flocking boids to start in the right spots
pointsOffsetX_specific = (window.innerWidth - titleWidth * scale) / 2
pointsOffsetY_specific =
  (window.innerHeight - titleHeight * scale - AdditionalTitleSpacing) / 2
pointsOffsetX_architectures = pointsOffsetX_specific
pointsOffsetY_architectures =
  pointsOffsetY_specific + baselineTitleSpacing * scale + AdditionalTitleSpacing

let textColor = (0, 0, 0)
let thickness = 1
let flappyCounter = 0

// // text objects are located in 'assets/textshapes.js'
getAllObjectArrays(
  textObjectArray,
  scale,
  pointsOffsetX_specific,
  pointsOffsetY_specific
)

getAllObjectArrays(
  objectstoAvoid,
  scale,
  pointsOffsetX_specific,
  pointsOffsetY_specific
)

bigArrayofPointstoAvoid = []
for (let i = 0; i < objectstoAvoid.length; i++) {
  bigArrayofPointstoAvoid = bigArrayofPointstoAvoid.concat(
    objectstoAvoid[i].offsetVertices
  )
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  frameRate(FRAME_RATE)

  // create new Flock object
  mainFlock = new Flock()
  // Add boids into the system
  for (let i = 0; i < bigArrayofPointstoAvoid.length; i++) {
    let b = new Boid(
      bigArrayofPointstoAvoid[i][0],
      bigArrayofPointstoAvoid[i][1]
    )
    mainFlock.addBoid(b)
  }
}

function draw() {
  background(255)
  stroke(textColor)
  strokeWeight(thickness)
  noFill()

  //centering cross
  //----------------
  // line(0, 0, width, height)
  // line(width, 0, 0, height)
  //----------------
  if (frameCount % 5 == 0) {
    flappyCounter++
  }
  if (flappyCounter % 30 == 0) {
    flappyCounter = 0
  }

  if (frameCount <= 148 * drawing_scalar) {
    textColor = color(0)
    r = 0
    g = 0
    b = 0
  } else if (frameCount <= (148 * drawing_scalar) + 200) {
    thickness = map(
      frameCount,
      148 * drawing_scalar,
      148 * drawing_scalar + 200,
      1,
      10
    )
    r = map(frameCount,      148 * drawing_scalar,
      148 * drawing_scalar + 200, 0, 130)
    g = map(frameCount, 148 * drawing_scalar, 148 * drawing_scalar + 200, 0, 80)
    b = map(frameCount, 148 * drawing_scalar, 148 * drawing_scalar + 200, 0, 80)
    stroke(color(r, g, b))
  } else if (frameCount <= DURATION + 205) {
    thickness = map(frameCount, DURATION + 200, DURATION + 205, 20, 40)
    r = map(
      frameCount,
      148 * drawing_scalar + 200,
      148 * drawing_scalar + 205,
      130,
      130
    )
    g = map(
      frameCount,
      148 * drawing_scalar + 200,
      148 * drawing_scalar + 205,
      100,
      60
    )
    b = map(
      frameCount,
      148 * drawing_scalar + 200,
      148 * drawing_scalar + 205,
      100,
      60
    )
    stroke(color(r, g, b))
  } else {
    stroke(color(r, g, b))
    thickness = 1
    noFill()
    mainFlock.run()
  }

  push()
  translate(
    (width - titleWidth * scale) / 2,
    (height - titleHeight * scale - AdditionalTitleSpacing) / 2
  )
  // //bounding box for alignment
  // rect(0, 0, titleWidth * scale, (titleHeight * scale) + AdditionalTitleSpacing)
  // line(
  //   0,
  //   0,
  //   titleWidth * scale,
  //   titleHeight * scale + AdditionalTitleSpacing)
  // line(
  //   0,
  //   titleHeight * scale + AdditionalTitleSpacing,
  //   titleWidth * scale,
  //   0
  // )
  //----------------

  // dear_text.shape()
  // mom_text.shape()
  // comma_1_text.shape()
  // while_text.shape()
  // my_text.shape()
  // cards_text.shape()
  // may_text.shape()
  // keep_text.shape()
  // evolving_text.shape()
  // comma_2_text.shape()
  // my_2_text.shape()
  // love_text.shape()
  // and_text.shape()
  // appreciation_text.shape()
  // for_text.shape()
  // you_text.shape()
  // is_text.shape()
  // i_dot.shape()
  // always_text.shape()
  // constant_text.shape()
  // period_text.shape()
  // I_text.shape()
  // will_text.shape()
  // try_text.shape()
  // to_text.shape()
  // make_text.shape()
  // every_text.shape()
  // day_text.shape()
  // mothers_text.shape()
  // apostrophe_text.shape()
  // day_2_text.shape()
  // your_text.shape()
  // dutiful_text.shape()
  // dutiful_crossed_T_text.shape()
  // son_text.shape()
  // ross_text.shape()
  // comma_3_text.shape()
  // misc_text_1.shape()
  // exclamation_line.shape()
  // exclamation_point.shape()
  // line_1.shape()
  if (frameCount > 1 * drawing_scalar) {
    animS.shape('Dear', 4 * drawing_scalar, dear_text.scaledBezierVertices)
  }
  if (frameCount > 5 * drawing_scalar) {

    animS.shape('Mom', 3 * drawing_scalar, mom_text.scaledBezierVertices)
  }
  if (frameCount > 8 * drawing_scalar) {
    animS.shape('comma1', 1 * drawing_scalar, comma_1_text.scaledBezierVertices)
  }
  if (frameCount > 9 * drawing_scalar) {
    animS.shape('while', 5 * drawing_scalar, while_text.scaledBezierVertices)
  }
  if (frameCount > 14 * drawing_scalar) {
    animS.shape('my', 2 * drawing_scalar, my_text.scaledBezierVertices)
  }
  if (frameCount > 16 * drawing_scalar) {
    animS.shape('cards', 5 * drawing_scalar, cards_text.scaledBezierVertices)
  }
  if (frameCount > 21 * drawing_scalar) {
    animS.shape('may', 3 * drawing_scalar, may_text.scaledBezierVertices)
  }
  if (frameCount > 24 * drawing_scalar) {
    animS.shape('keep', 4 * drawing_scalar, keep_text.scaledBezierVertices)
  }
  if (frameCount > 28 * drawing_scalar) {
    animS.shape('evolving', 8 * drawing_scalar, evolving_text.scaledBezierVertices)
  }
  if (frameCount > 36 * drawing_scalar) {
    animS.shape('comma2', 1 * drawing_scalar, comma_2_text.scaledBezierVertices)
  }
  if (frameCount > 37 * drawing_scalar) {
    animS.shape('my2', 2 * drawing_scalar, my_2_text.scaledBezierVertices)
  }
  if (frameCount > 39 * drawing_scalar) {
    animS.shape('love', 4 * drawing_scalar, love_text.scaledBezierVertices)
  }
  if (frameCount > 43 * drawing_scalar) {
    animS.shape('and', 3 * drawing_scalar, and_text.scaledBezierVertices)
  }
  if (frameCount > 46 * drawing_scalar) {
    animS.shape(
      'appreciation',
      10 * drawing_scalar,
      appreciation_text.scaledBezierVertices
    )
  }
  if (frameCount > 56 * drawing_scalar) {
    animS.shape('for', 3 * drawing_scalar, for_text.scaledBezierVertices)
  }
  if (frameCount > 59 * drawing_scalar) {
    animS.shape('you', 3 * drawing_scalar, you_text.scaledBezierVertices)
  }
  if (frameCount > 62 * drawing_scalar) {
    animS.shape('is', 2 * drawing_scalar, is_text.scaledBezierVertices)
  }
  if (frameCount > 64 * drawing_scalar) {
    animS.shape('i', 1 * drawing_scalar, i_dot.scaledBezierVertices)
  }
  if (frameCount > 65 * drawing_scalar) {
    animS.shape('always', 6 * drawing_scalar, always_text.scaledBezierVertices)
  }
  if (frameCount > 71 * drawing_scalar) {
    animS.shape('constant', 8 * drawing_scalar, constant_text.scaledBezierVertices)
  }
  if (frameCount > 79 * drawing_scalar) {
    animS.shape('period', 6 * drawing_scalar, period_text.scaledBezierVertices)
  }
  if (frameCount > 85 * drawing_scalar) {
    animS.shape('I', 1 * drawing_scalar, I_text.scaledBezierVertices)
  }
  if (frameCount > 86 * drawing_scalar) {
    animS.shape('will', 4 * drawing_scalar, will_text.scaledBezierVertices)
  }
  if (frameCount > 90 * drawing_scalar) {
    animS.shape('try', 3 * drawing_scalar, try_text.scaledBezierVertices)
  }
  if (frameCount > 93 * drawing_scalar) {
    animS.shape('to', 2 * drawing_scalar, to_text.scaledBezierVertices)
  }
  if (frameCount > 95 * drawing_scalar) {
    animS.shape('make', 4 * drawing_scalar, make_text.scaledBezierVertices)
  }
  if (frameCount > 99 * drawing_scalar) {
    animS.shape('every', 5 * drawing_scalar, every_text.scaledBezierVertices)
  }
  if (frameCount > 104 * drawing_scalar) {
    animS.shape('day', 3 * drawing_scalar, day_text.scaledBezierVertices)
  }
  if (frameCount > 107 * drawing_scalar) {
    animS.shape('mothers', 7 * drawing_scalar, mothers_text.scaledBezierVertices)
  }
  if (frameCount > 114 * drawing_scalar) {
    animS.shape(
      'apostrophe',
      1 * drawing_scalar,
      apostrophe_text.scaledBezierVertices
    )
  }
  if (frameCount > 115 * drawing_scalar) {
    animS.shape('day2', 3 * drawing_scalar, day_2_text.scaledBezierVertices)
  }
  if (frameCount > 118 * drawing_scalar) {
    animS.shape(
      'exclamationLine',
      1 * drawing_scalar,
      exclamation_line.scaledBezierVertices
    )
  }
  if (frameCount > 119 * drawing_scalar) {
    animS.shape('exclamationPoint', 1, exclamation_point.scaledBezierVertices)
  }
  if (frameCount > 120 * drawing_scalar) {
    animS.shape('your', 4 * drawing_scalar, your_text.scaledBezierVertices)
  }
  if (frameCount > 124 * drawing_scalar) {
    animS.shape('dutiful', 7 * drawing_scalar, dutiful_text.scaledBezierVertices)
  }
  if (frameCount > 131 * drawing_scalar) {
    animS.shape(
      'dutifulCrossedT',
      2 * drawing_scalar,
      dutiful_crossed_T_text.scaledBezierVertices
    )
  }
  if (frameCount > 133 * drawing_scalar) {
    animS.shape('son', 3 * drawing_scalar, son_text.scaledBezierVertices)
  }
  if (frameCount > 136 * drawing_scalar) {
    animS.shape('comma3', 1 * drawing_scalar, comma_3_text.scaledBezierVertices)
  }
  if (frameCount > 140 * drawing_scalar) {
    animS.shape('ross', 4 * drawing_scalar, ross_text.scaledBezierVertices)
  }

  // push()
  // translate(0, baselineTitleSpacing * titleScale + AdditionalTitleSpacing)
  // line_2.shape()
  // line_3.shape()
  // animS.shape(
  //   'architecturesName',
  //   DURATION,
  //   text_Architectures.scaledscaledBezierVertices
  // )
  pop()
  // pop()
}

function drawWord(textObject, id, startFrame) {
  animS.shape(
    id,
    textObject.text.length * drawing_scalar,
    textObject.scaledBezierVertices
  )
  return startFrame + textObject.text.length * drawing_scalar
}
