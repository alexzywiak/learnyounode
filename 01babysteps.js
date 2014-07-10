var prc = process.argv;
var len = prc.length;
var sum = 0;

if( len > 2){
  for (var i = 2; i < len; i++){
    sum += Number(prc[i]);
  }
}
console.log(sum);