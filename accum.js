// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
       var res=""
       str=input.split('')

       for(var i=0;i<str.length;i++){
       	       var count=0
       	       
       	     
        upper=str[i].toUpperCase()

       	while(count<=i){
       
          res=res+upper+str[i]+"-"

          count=count+1
      
       	
       }
       }

       return res
    }