
function all_combinations_of_string(str) {
	var unique = true;
  for (i = 0; i <= str.length; i++) {
		for (u = i+1; u <= str.length; u++) {
    	if (str[i] == str[u]) unique = false;
		}
    if (unique == true) return str[i];
    else unique = true;
	}
}

console.log(all_combinations_of_string("asdfgsaf"));