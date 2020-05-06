
module.exports = function newArray(start, end) {
  start = +start;
  end = +end;
  if (!isNaN(start) && isNaN(end)) {
    end = start;
    start = 0;
  } else if (isNaN(start) && isNaN(end)) {
    start = end = 0;
  }

  const len = end - start;
  if (len < 0) throw new Error("array length must be positive");

  const a = new Array(len).fill(start).map((x, y) => x + y);
  return a;
};
