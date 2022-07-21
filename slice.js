// parseInt 原理：碰到字符串就中断处理
// parseInt('123') => 123
// parseInt('123dsajfd') => 123
// parseInt('qwef123asf') => NaN
// NaN -1 => NaN

Array.prototype._slice = function () {
  let startIndex, endIndex;
  if (arguments.length >= 2) {
    startIndex = parseInt(arguments[0]);
    endIndex = parseInt(arguments[1]) - 1;
  } else if (arguments.length === 1) {
    const tempStart = parseInt(arguments[0]);
    endIndex = this.length - 1;

    if (isNaN(tempStart)) {
      startIndex = tempStart;
    } else if (tempStart < 0) {
      startIndex = tempStart + this.length;
    } else {
      startIndex = tempStart;
    }
  } else {
    startIndex = 0;
    endIndex = this.length - 1;
  }

  if (isNaN(startIndex) || isNaN(endIndex)) {
    return [];
  } else {
    let res = new Array(endIndex - startIndex + 1);
    let index = 0;
    for (let i = startIndex; i < endIndex; i++) {
      if (this[i] !== undefined) {
        res[index] = this[i];
      }
      index++;
    }

    return res;
  }
};
