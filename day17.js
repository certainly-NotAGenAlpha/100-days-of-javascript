const toCamel = (str) => {
    let strArr = str.split(" ");
    strArr[0] = strArr[0].toLowerCase();
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1);
    }
    return strArr.join("");
}
console.log(toCamel("A man rides a bike"));