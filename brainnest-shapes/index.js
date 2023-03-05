function squareDiagonal(length) {
  const diagonal = length / Math.cos((45 * Math.PI) / 180);
  return Number(diagonal.toFixed(2));
}
function triangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return Number(area.toFixed(2));
}
function circle(radius) {
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  return {
    circumference: Number(circumference.toFixed(2)),
    area: Number(area.toFixed(2)),
  };
}
console.log(squareDiagonal(9));
console.log(triangleArea(5, 6, 7));
console.log(circle(4));
