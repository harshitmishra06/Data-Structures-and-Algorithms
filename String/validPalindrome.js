var isPalindrome = function(s) {
    s=s.toLowerCase();
    console.log(s)
    let filteredString="";
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString+=s[i]
        }
    }
if(filteredString==filteredString.split("").reverse().join("")) return true;
else  return false;
};