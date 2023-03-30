let num = Number(prompt("Enter a number to check for palindrome "));

function palindrome(x) {
    
    let reverse = Number(String(x).split('').reverse().join('')); 
    return reverse;
  }
  
  if(palindrome(num) === num){
    console.log("Number is palindrome");
  }
  else
  console.log("Number is not a palindrome");
  