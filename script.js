var a=prompt("Please enter the first side");
var b=prompt("Please enter the second side");
var c=prompt("Please enter the third side");

var aA=isNaN(a);
var bB=isNaN(b);
var cC=isNaN(c);

function determineTriangle(a, b, c){
    if((aA==false)&&(bB==false)&&(cC==false)){
        if(a==b && b==c && c==a){
            window.alert("The triangle is EQUILATERAL");
        } 
        else if(a==b && a!=c && b!=c){
            window.alert("The triangle is ISOSCELES");
        }
        else if(b==c && b!=a && c!=a){
            window.alert("The triangle is ISOSCELES");
        }
        else if(c==a && c!=b && a!=b){
            window.alert("The triangle is ISOSCELES");
        }
        else{
            window.alert("The triangle is SCALENE");
        }
    }
    else{
        window.alert("Please enter numbers only");
    }
}