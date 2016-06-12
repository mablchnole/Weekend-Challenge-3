var answer = 0;

var operations = function(x, type, y){
  if (type == 'multiply'){
    answer = Number(x) * Number(y);
  } if (type == 'divide'){
    answer = Number(x) / Number(y);
  } else if (type == 'add'){
    answer = Number(x) + Number(y);
  } else if (type == 'subtract'){
    answer = Number(x) - Number(y);
  } else {
    console.log('operations function is not working');
  }
  return answer;
};

console.log('in operations module: ' + answer);

module.exports=operations;
