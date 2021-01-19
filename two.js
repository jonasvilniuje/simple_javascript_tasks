
function all_combinations_of_string(str) {
    for (i = 0; i <= str.length; i++) {
        for (u = i+1; u <= str.length; u++) {
            console.log(str.substring(i, u))
        }
    }
}

all_combinations_of_string("cat");