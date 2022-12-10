/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return [...n].reduce((acc, cur) => Math.max(acc, cur));
};
