function getRange(dataList) {
  dataList = sort(dataList);
  let firstElement = dataList[0];
  let previous = dataList[0];
  let counter = 1;
  const result = {};
  for (let i = 0; i <= dataList.length-1; i++) {
    if (checkIfCountinous(dataList[i], previous)) {
      previous = dataList[i];
      counter++;
    } else {
      result[`${firstElement}-${previous}`] = counter;
      firstElement = dataList[i];
      previous = dataList[i];
      counter = 1;
    }
  }
  result[`${firstElement}-${previous}`] = counter;
  return result;
}

function formatJson(key, value) {
  return `${key}, ${value}`;
}

function printRange() {
  const data = getRange([1,1,2, 2, 4, 3, 6, 5, 7, 11, 10]);
  for (const [key, value] of Object.entries(data)) {
    console.log(formatJson(key, value));
  }
}

function sort(dataList) {
  return dataList.sort((a, b) => a - b);
}
function checkIfCountinous(current, previous) {
  return [0, 1].includes(current - previous);
}

printRange();

module.exports = {
  sort,
  getRange,
  formatJson,
  checkIfCountinous,
};