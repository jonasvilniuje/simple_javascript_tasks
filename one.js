function invert_str(str) {
    let str_inverted = '';
    
    for(i = str.length-1; i >= 0 ; i--) {
        str_inverted = str_inverted +str[i];
    }
    return str_inverted;
}

console.log(invert_str("kėdės"));

