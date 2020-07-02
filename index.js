// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a);
console.log(typeof b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0; i<a.length; i++) {
    a[i] *= 2;
}
console.log("[" + a.toString() + "]")



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var colorsA = colors.join(" ");
console.log(colorsA.toString());
var colorsB = colors.join("+");
console.log(colorsB);
var colorsC = colors.join(",");
console.log(colorsC);



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(
    function compare(a, b) {
        if (a > b ) {
            return -1;
        }
        if (a < b ) {
            return 1;
        }
        return 0;
    }
))



// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(a) {
    if (!a.length) return
    if (a.length === 1) return 1
    let res = {}
    let maxName, maxNum = 0;
    a.forEach((item) => {
        res[item] ? res[item] += 1 : res[item] = 1
    })
    for (let r in res) {
        if (res[r] > maxNum) {
            maxNum = res[r]
            maxName = r;
        }
    }
    return maxName;
}
console.log(findMost(a))