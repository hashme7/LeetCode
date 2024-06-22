/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flower, n) {
    for (let i = 0; i < flower.length; i++) {
        if (flower[i] == 1) {
            i++;
        } else {
            if (flower[i - 1] != 1 && flower[i+1]!=1) {
                n--;
                flower[i] = 1;
            }
        }
    }
    return n <= 0;
};