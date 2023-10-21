let Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Array2 = getOddNumbers(Array1);


function getOddNumbers(arr){
    let Array3 = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 2 !== 0){
            Array3.push(arr[i]);

        }
    }
    return Array3;
}

console.log(Array2);



