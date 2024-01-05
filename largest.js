// const array=[1,2,3,4,5,6,8,5,9,9,10]
// size=array.length

// let smallest=array[0]

// for(let i=1;i<size;i++){
//     if(array[i]<smallest){
//         smallest=array[i]
//     }
// }
// console.log(smallest)
// console.log(size)

// for(let i=0;i<size;i++){
//     largest=0
//     for(let j=1;j<size;j++){
//         if(  array[i]<array[j]){
//             largest=array[i]
//         }
//     }
// }
// console.log(largest)

// const largest=array.reduce((a,i)=>{
// return a>i?a:i
// })

const array2=[1,2,4,5,6,7,6,7,8,8,9,1,2,3]

const unique=array2.filter((nums,index)=>{
    console.log(nums)
    console.log(`${index} is`)
    return array2.indexOf(nums)==index
})
console.log(unique)



// const unique=[... new Set(array2)]
// console.log(unique)

// const

