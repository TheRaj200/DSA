let arr = [1, 2, 3, 4,2, 5, 6];
let sum = 6;

let count = 0;

for (let i = 0; i < arr.length; i++) {
    let total = 0;

    for (let j = i; j < arr.length; j++) {
        total += arr[j];

        if (total === sum) {
            count++;
        }
    }
}

console.log(count);