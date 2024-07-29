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