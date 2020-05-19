// Replace array A by array B
const newArray = arrayA.map(obj => arrayB.find(o => o.startDateTime === obj.startDateTime) || obj);

// Select arrayA if arrayB include ID of arrayA
const newArray = arrayA.filter((x) => arrayB.includes(x.id));
const nameOrder = (newArray.map(x => x.code + '_')).join(''); => string concat

// Create new array include arrayA and new element
const newArray = arrayA.map(it => pick(it, ['firstName', 'lastName'])).map(it => ({
    ...it,
    fullname: it.firstName + ' ' + it.lastName
}));
