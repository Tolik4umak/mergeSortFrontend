

let arr1 = [100,112,256,349,770]
let arr2 = [72,86,113,119,256,445,892]


const findIndex = (arr1, arr2, index) => {
    const newArr = []

    let i = 0 // 0 
    let j = 0 // 1
    let k = 0 // 1 

    while(i < arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            newArr[k]= arr1[i]
            i++
        }else if(arr1[i]>=arr2[j]){
            newArr[k]= arr2[j]
            j++
        }
        k++
    }

    while(i < arr1.length){
        newArr[k]= arr1[i]
        i++
        k++
    }
    while(j < arr2.length){
        newArr[k]= arr2[j]
        j++
        k++
    }

    console.log(newArr)

    return newArr[index]

}


console.log(findIndex(arr1, arr2, 0))