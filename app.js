var percentage = prompt("Enter Your Percentage");
var totalnum = 100;
function grage(){
    if (percentage >95 && percentage < totalnum){
        return "Grade A+"}
   else if (percentage >=90  && percentage < totalnum){
        return "Grade A"}
       else if (percentage >=80 && percentage < totalnum){
            return "Grade B+"}
          else if (percentage >=70 && percentage < totalnum){
                return "Grade B"}
               else if (percentage >=60 && percentage < totalnum){
                    return "Grade C"}
                   else if (percentage >=50 && percentage < totalnum){
                        return "Grade D"}
                      else  if (percentage >=40  && percentage < totalnum){
                            return "Grade E"}
           else if (percentage >=0 && percentage <=40){  
            return "Grade F"}               

else{
    return "Invalid Percentage"
}
}
var num = grage();
alert(num);