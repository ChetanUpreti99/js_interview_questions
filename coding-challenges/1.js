const obj = [{
    key: "Sample 1",
    data: "data1",
}, {
    key: "Sample 1",
    data: "data1",

}, {
    key: "Sample 2",
    data: "data2",

}, {
    key: "Sample 1",
    data: "data1",

}, {
    key: "Sample 3",
    data: "data3",
}, {
    key: "Sample 4",
    data: "data1",
}
]


/* const output = {
    "Sample 1": [{
        key: "Sample 1",
        data: "data1",
    }, {
        key: "Sample 1",
        data: "data1",
    }, {
        key: "Sample 1",
        data: "data1",
    }],
    "Sample 2": [{
        key: "Sample 2",
        data: "data2",
    }],
    "Sample 3": [{
        key: "Sample 3",
        data: "data3",
    }],
    "Sample 4": [{
        key: "Sample 4",
        data: "data1",
    }]
} */


/* let output = obj.reduce((acc, ob) => {
    let { key } = ob;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(ob);
    return acc;
}, {}); */


let output = obj.reduce((acc, { data, key }) => {
    (acc[key] = acc[key] || []).push({ key, data });
    return acc;
}, {});

/* for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    const { key } = element;
    if (!output[key]) {
        output[key] = [];
    }
    output[key].push(element);
}
 */
console.log(output);

const add = (a, b) => a + b;

function memoizeOne(fn) {
    let result = {};
    return function (a, b) {
        if (result[`${a}${b}`]) {
            console.log(`here`, result[`${a}${b}`]);
            return result[`${a}${b}`];
        } else {
            result[`${a}${b}`] = fn(a, b);
            return result[`${a}${b}`];
        }
    }

}

const memoizeAdd = memoizeOne(add);

console.log(memoizeAdd(1, 3));

console.log(memoizeAdd(1, 3));
console.log(memoizeAdd(1, 5));
console.log(memoizeAdd(1, 5));



const arr = [1, 2, 3, 4, [5, [6, 7]], 8, 9, 10];

function flattenArr(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (Array.isArray(element)) {
            result.push(...flattenArr(element));
        } else {
            result.push(element);
        }

    }
    return result;
}

console.log(flattenArr(arr))
