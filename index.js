module.exports = isPowerOfTwo

function isPowerOfTwo(n) {
  return n !== 0 && (n & (n - 1)) === 0
}