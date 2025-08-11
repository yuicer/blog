// from left top, clockwise rotate
function getBezierCurvesFromRect(p0, p1, p2, p3) {
  const offset = 1 / 4;
  const width = p1.x - p0.x;
  const height = p2.y - p1.y;

  return [
    // start
    p0.x,
    p0.y,
    // curve1
    p0.x + offset * width,
    p0.y,
    p1.x - offset * width,
    p1.y,
    p1.x,
    p1.y,
    // curve2
    p1.x,
    p1.y + offset * height,
    p2.x,
    p2.y - offset * height,
    p2.x,
    p2.y,
    // curve3
    p2.x - offset * width,
    p2.y,
    p3.x + offset * width,
    p3.y,
    p3.x,
    p3.y,
    // curve4
    p3.x,
    p3.y - offset * height,
    p0.x,
    p0.y + offset * height,
    p0.x,
    p0.y,
  ];
}

// from top, clockwise rotate
function getBezierCurvesFromCircle(cx, cy, r) {
  const k = 0.5522847498;
  const offset = k * r;

  return [
    // start
    cx,
    cy - r,
    // curve 1
    cx + offset,
    cy - r,
    cx + r,
    cy - offset,
    cx + r,
    cy,
    // curve2
    cx + r,
    cy + offset,
    cx + offset,
    cy + r,
    cx,
    cy + r,
    // curve 3
    cx - offset,
    cy + r,
    cx - r,
    cy + offset,
    cx - r,
    cy,
    // curve 4
    cx - r,
    cy - offset,
    cx - offset,
    cy - r,
    cx,
    cy - r,
  ];
}

// from top, clockwise rotate
function getBezierCurvesFromTriangle(p0, p1, p2) {
  const offset = 1 / 4;
  const width = p1.x - p0.x;
  const height = p2.y - p1.y;

  return [
    // start
    p0.x,
    p0.y,
    // curve1
    p0.x + offset * (p1.x - p0.x),
    p0.y + offset * (p1.y - p0.y),
    p1.x - offset * (p1.x - p0.x),
    p1.y - offset * (p1.y - p0.y),
    p1.x,
    p1.y,
    // curve2
    p1.x + offset * (p2.x - p1.x),
    p1.y + offset * (p2.y - p1.y),
    p2.x - offset * (p2.x - p1.x),
    p2.y - offset * (p2.y - p1.y),
    p2.x,
    p2.y,
    // curve3
    p2.x + offset * (p0.x - p2.x),
    p2.y + offset * (p0.y - p2.y),
    p0.x - offset * (p0.x - p2.x),
    p0.y - offset * (p0.y - p2.y),
    p0.x,
    p0.y,
  ];
}

function lerp(p0, p1, t) {
  return {
    x: (1 - t) * p0.x + t * p1.x,
    y: (1 - t) * p0.y + t * p1.y,
  };
}
// deCasteljauSplit
function splitCurve(p0, p1, p2, p3, t) {
  const p01 = lerp(p0, p1, t);
  const p12 = lerp(p1, p2, t);
  const p23 = lerp(p2, p3, t);

  const p012 = lerp(p01, p12, t);
  const p123 = lerp(p12, p23, t);

  const p0123 = lerp(p012, p123, t);

  // return two curve
  return {
    left: [
      // curve1
      p0.x,
      p0.y,
      p01.x,
      p01.y,
      p012.x,
      p012.y,
      p0123.x,
      p0123.y,
    ],
    right: [
      // curve2
      p0123.x,
      p0123.y,
      p123.x,
      p123.y,
      p23.x,
      p23.y,
      p3.x,
      p3.y,
    ],
  };
}

function drawBezierArr(arr) {
  ctx.clearRect(0, 0, 500, 500);

  ctx.beginPath();

  let x0 = arr[0];
  let y0 = arr[1];
  ctx.moveTo(x0, y0);

  for (let i = 2; i < arr.length; i += 6) {
    const x1 = arr[i];
    const y1 = arr[i + 1];
    const x2 = arr[i + 2];
    const y2 = arr[i + 3];
    const x3 = arr[i + 4];
    const y3 = arr[i + 5];

    if (x0 === x1 && y0 === y1 && x2 === x3 && y2 === y3) {
      ctx.lineTo(x3, y3);
    } else {
      ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
    }

    ctx.strokeStyle = "black";
    ctx.stroke();

    // control point
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x1, y1, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x2, y2, 3, 0, Math.PI * 2);
    ctx.fill();

    // start end
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x0, y0, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x3, y3, 3, 0, Math.PI * 2);
    ctx.fill();

    // next start
    ctx.beginPath();
    ctx.moveTo(x3, y3);

    x0 = x3;
    y0 = y3;
  }

  ctx.closePath();
}
  