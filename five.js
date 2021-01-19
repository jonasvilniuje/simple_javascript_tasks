function sum(arr) {
	var sum = 0;
	for(i = 0; i < arr.length; i++){
  	sum=sum+arr[i];
  }
  return sum;
}

arr = [1,4,5, 7]
console.log(sum(arr))