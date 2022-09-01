function convertA2D(inputArray, maxAmpValue = 10, maxBitValue = 4094) {
    if (inputArray.some((value) => !checkIfInRange(value))) {
      throw new Error('invalid');
    }
    return inputArray.map((value) => {
      return convertA2D(value, maxAmpValue, maxBitValue);
    });
  }

  function getMaxLimitInBit(bit) {
    return Math.pow(2, bit) - 2;
  }
  
  function checkIfInRange(inputArray, maxBitValue = 4094) {
    return inputArray <= maxBitValue;
  }
  
  function convertA2D(value, maxAmpValue = 10, maxBitValue = 4094) {
    return Math.round(maxAmpValue * value / maxBitValue);
  }
  
  module.exports = {getMaxLimitInBit, checkIfInRange, convertA2D, converArraytA2D}; 