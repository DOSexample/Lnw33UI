if(String.prototype.padStart !== 'object'){

String.prototype.padStart = function(length, padString) {
    var str = this;
    while (str.length < length)
        str = padString + str;

    return str;
}

}