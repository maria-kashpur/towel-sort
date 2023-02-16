
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length === 0) {
    return []
  } else {
    matrix = matrix.map((el, index) => index%2 !== 0 ? el.reverse(): el)
    let arr = matrix.reduce((accum, el) => {
      el.forEach(item => accum.push(item))
      return accum
    }, [])
    return arr;
  }
}
