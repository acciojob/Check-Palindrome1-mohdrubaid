// complete the given function

function palindrome(str){
str=str.toLoereCase().replace(/[^a-z0-9]/g, "");
	return strr===str.split("").reverse().join("");
}
module.exports = palindrome
