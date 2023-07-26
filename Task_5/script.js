Array = [1, 2, 3, 4, 5, 6, 7, 8]

i = 0;
console.log(Array.length)
for (i = 0; i < Array.length; i++) {


    let remainder = (Array[i] % 2);
    if (remainder == 0) {
        console.log('even number' + Array[i])
    }
    else {
        console.log('odd number' + Array[i])
    }
}