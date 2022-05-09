function lettersOccurence(str) {
    let res = {}
    for (let letter of str) {
        if (res[letter] == undefined) res[letter] = 1
        else res[letter] += 1
    }
    return res
}
console.log(lettersOccurence(" Le Ygoat oui oui oui"))
