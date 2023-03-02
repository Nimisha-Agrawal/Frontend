// Important Article :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Question1 -> Wrong solution, have to use (for,for in,or for of) loop instead of forEach
const arr = [{
    id: 1,
    name: 'Nimisha'
}, {
    id: 2,
    name: 'Kanica'
}
]

let count = 0;

const nameOfPerson = (arr, id) => {
    return arr.forEach((item) => {
        if (item.id === id) {
            console.log(item['name']);
            return;
        }
        count++;
    })
}

nameOfPerson(arr, 1);

//Question 2
const obj = [{ id: 1, company: { id: 2, name: 'abc' } },
{ id: 2, name: 'Nimisha2', company: { id: 2, name: 'agrawal2' } }]

const findFirstString = (arr) => {
    const values = Object.values(arr);
    for (let val of values) {
        if (typeof val == 'string') {
            return val;
        } else if (typeof val == 'object') {
            return findFirstString(val);
        }
    }
}

const findValue = (arr, id, key) => {
    for (let item of arr) {
        if (item.id == id) {
            if (key == undefined) {
                console.log(findFirstString(item));
                return;
            } else {
                const keyArr = key.split('.');
                let val = item;
                for (let key of keyArr) {
                    if (val != undefined) {
                        val = val[key];
                    }
                }
                val === undefined ? findValue(arr, id, undefined) : console.log(val);
                return;
            }
        }
    }
}

findValue(obj, 1, '');


//Calling forEach() on non-array objects
//The forEach() method reads the length property of this and then accesses each integer index.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4




