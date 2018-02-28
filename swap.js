	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		
		for(var i=0;i<input.length;i++){
		if(input[i]===input[i].toUpperCase()){
                    input[i]=input[i].toLowercase()
		}
             else{

            input[i]=input[i].toUpperCase()

	}
          
	}
	  return input
}