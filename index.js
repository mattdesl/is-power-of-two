module.exports = isPowerOfTwo

function isPowerOfTwo(n) {
  // Iterate over every possible power of two, from Number.MIN_VALUE = 2^{-1074} to 2^1023
  // Note that thanks to the nature of 64-bit floating point arithmetic, all of these results
  // are precisely accurate
  for (let powerOfTwo = Number.MIN_VALUE; powerOfTwo < Infinity; powerOfTwo *= 2) {
    if (n === powerOfTwo) {
      return true
    }
  }
  return false
}
