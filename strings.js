// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
	var array=['a','b','c','d','e','f','g','h','i','j','k','l','m'
	,'n','o','p','q','r','s','t','u','v','w','x','y','z']
	for(var i=0;i<array.length;i++)
         if(character===array[i]){
         	 f=i+1 
         }
         return "Position of alphabet: "+f
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
           res=""
		for(var i=0;i<s;i++){
                  res=res+n

		}
		return res
	}