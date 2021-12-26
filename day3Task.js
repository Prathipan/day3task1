var car = {
    "name" : "Renault",
    "model" : 2021,
    "color" : "red",
    "mileage" : 25,
    "variant" : "petrol"
};

// console.log(car["name"]);
//for in
for(let key in car) {
    console.log("key :" + key + " => " + "values :" + car[key]);
}

// // for of
 
for(let value of Object.keys(car)) {
    console.log(value);
}

// for

let values = Object.keys(car);
for(let i=0 ; i < values.length ; i++) {

    console.log(`key:${values[i]} : value : ${car[values]}`);
}

// for each

// car.array.forEach((index,value) => {
//     console.log('My array has at position ' + index + ', this value: ' + value);
// });