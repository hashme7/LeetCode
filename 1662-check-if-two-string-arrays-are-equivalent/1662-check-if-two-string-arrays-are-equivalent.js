/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wordfirst = word1.join('')
    let wordsecond = word2.join('');
    return wordfirst == wordsecond;
};