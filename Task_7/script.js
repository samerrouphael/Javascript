for (let i = 1; i <21; i++) {
    console.log(i)
}

for (let i = 1; i <21; i++) {
    
    

    if (i%3==0 &&  i%5 == 0) {
        console.log('DIV3&5', i)
    }
    else if (i%5 == 0) {
        console.log('DIV5', i)
    }
    else if (i%3 == 0 ) {
        console.log('DIV3', i)
    }
    else {
        console.log('the number', i)
    }
}
