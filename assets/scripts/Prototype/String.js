if(typeof(String.prototype.padStart) !== 'function'){

String.prototype.padStart = function(length, padString) {
    var str = this;
    while (str.length < length)
        str = padString + str;

    return str;
}

}