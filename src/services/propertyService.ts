export function getBid(max: number, shouldSkew = false) {
  let rand = Math.random();
  if (shouldSkew) rand = Math.pow(Math.random(), 2);
  return Math.floor(rand * (max - 1) + 1);
}
