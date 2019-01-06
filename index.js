module.exports = isPowerOfTwo

function isPowerOfTwo(n) {
  for (let powerOfTwo = Number.MIN_VALUE; powerOfTwo < Infinity; powerOfTwo *= 2) {
    if (n === powerOfTwo) {
      return true
    }
  }
  return false
}
