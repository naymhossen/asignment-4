/* Problem - 1 */

function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'Please provide a number';
    }else{
        return Math.pow(number,3);
    }
}

/* Problem - 2 */

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'provide me an string';
    }else{
        if(string1.includes(string2)){
            return true;
        }else{
            return false;
        }
    }
}

const string1 = 'JavaScript';
const string2 = 'Code';


/* Problem - 3 */

function sortMaker(array) {

    if (array.length < 0) {
        return "invalid input";

    } else if (typeof array[1] !== 'number') {
        return "invalid input";

    } else if (array[0] === array[1]) {
        return "equal";

    } else if (array[1] > 0) {

        for (let i = 0; i < array.length - 1; i++) {

            for (let x = 0; x < array.length - i - 1; x++) {

                if (array[x] < array[x + 1]) {

                    let temp = array[x];

                    array[x] = array[x + 1];
                    array[x + 1] = temp;
                }
            }
        }
        return array;
    }

    return "invalid input";
}


/* Problem - 4 */

function findAddress(obj){
    if(typeof obj !== 'object'){
        return "should be provide me an object"
    }else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__'

        return street+ ','+house+ ',' +society;
    }
}

const isInfo = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect',
}

/* Problem - 5 */

function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "should be provide me an number";
    }else if(changeArray < 0 || totalDue < 0){
        return "should be provide me an positive number";
    }
    let totalAmount = 0;
    for(let item of changeArray){
        totalAmount += item;
    }if(totalAmount >= totalDue){
        return true;
    }else{
        return false
    }
}



/* console.log(cubeNumber(4));

console.log(matchFinder(string1, string2));

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));

console.log(findAddress(isInfo));

console.log(canPay([1,5,5], 10)); */