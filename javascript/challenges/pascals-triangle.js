function pascalsTriangle(n) {
  if(n <= 0){
    return 1;
  } else {
    return nextRow(pascalsTriangle(n - 1));
  }
}

let nextRow = (lastRow) => {
  let newRow = [];
  newRow.push(1);
  for(let i = 0; i < lastRow.length - 1; i ++){
    newRow.push(lastRow[i] + lastRow[i + 1]);
  }
  newRow.push(1);
  return newRow;
};

console.log(pascalsTriangle(5));
