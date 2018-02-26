module.exports = function solveEquation(equation) {
  var str = equation;
  
  var ind1 = str.indexOf('*');
  var ind2 = str.indexOf('*',(ind1+1));
  
  var a = +str.slice(0,ind1);
  var b = +(str.slice(ind1 + 6,ind1 + 7) + str.slice(ind1 + 8,ind2 - 1));
  var c = +(str.slice(ind2 + 4,ind2 + 5) + str.slice(ind2 + 6));
  
  var discriminant = b * b - 4 * a * c;
  
  var x1 = Math.round((- b - Math.sqrt(discriminant)) / 2 / a);
  var x2 = Math.round((- b + Math.sqrt(discriminant)) / 2 / a);
  
  var result = [];
  
  if( x1 < x2){
	  result = [x1,x2];
  } else {
	  result = [x2,x1]
  }
  
 
  
  return result;
}
