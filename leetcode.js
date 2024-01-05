
let list1=[1,3,4]
let list2=[1,2,5]

let temp=0;

const mergedArray = [];

// Merge the two lists
let size1 = list1.length;
let size2 = list2.length;

for (let i = 0; i < size1; i++) {
    mergedArray.push(list1[i]);
}

for (let j = 0; j < size2; j++) {
    mergedArray.push(list2[j]);
}
console.log(mergedArray)
// Sort the merged array in descending order
for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
        if (mergedArray[i] > mergedArray[j]) {
            temp = mergedArray[i];
            mergedArray[i] = mergedArray[j];
            mergedArray[j] = temp;
        }
    }
}

for(let c=0;c<5;c++){
    for(let f=c+1;f<5;f++){
        console.log(f+"seperation")
    }
    console.log(c)
}

console.log(mergedArray)
    