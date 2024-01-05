const array=[10,2,4,3,4,5,6,6,1,7,7]

const occurrency={
    
}

array.forEach(Element=>{
    console.log(Element)
    occurrency[Element]=(occurrency[Element]||0)+2
})
console.log(occurrency)
