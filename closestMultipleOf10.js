 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	

if( num[1]<5){
return num[0]+"0"
}
 else if(num[1]>5){
 	return (num[0]+1)+"0"
 }	
 }