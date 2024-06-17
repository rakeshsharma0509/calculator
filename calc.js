let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let string="";
let calculated=false;
let prevString="";
//let arr=Array.from(buttons);
 for(var i=0; buttons.length; i++)
 {
    buttons[i].addEventListener("click", function(e){
        if(e.target.innerHTML=== "=")
        { 
            string=evaluate(string);
            input.value=string;
            calculated=true;
        }
        else if(e.target.innerHTML==="AC")
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML==="DEL")
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            if(calculated)
            {
                prevString+=e.target.innerHTML;
                string="";
                string=prevString; 
                prevString=""; 
                calculated=false;
            }
            else{
                string+=e.target.innerHTML;
            }
            input.value=string;
        }
    })
 }

 function evaluate(string){
    var result=-1;
    express_arr=string.match(/\d+|[^0-9]/g);
    for( let i=0;i<express_arr.length; i++){
        if(i==0) result=express_arr[0];
        else{
            if(!isNaN(express_arr[i]))
            {
                switch(express_arr[i-1])
                {
                    case '+': result+=express_arr[i];
                                break;
                    case '-': result-=express_arr[i];
                                break;
                    case '*': result*=express_arr[i];
                                break;
                    case '/': result/=express_arr[i];
                                break;
                    case '%': result%=express_arr[i];
                                break;
                }               
            }
        }
    }
    return result;
 }


 function reset(e,string)
 {
    prevString=e.tageinnerHTML
 }