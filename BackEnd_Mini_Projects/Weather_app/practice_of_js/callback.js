
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000);
}

geocode('Philadelphia', (data) => {
    console.log(data);
})

// ! _____________________

const add = (a, b, callback)=> {
    let sum = a+b;
    callback(sum);
}

add(1, 4, (sum)=> {
    console.log("Sum of a and b is: ", sum);
})