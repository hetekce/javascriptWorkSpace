//for loop
for (let i=0;i<=10;i++){
    console.log(i)
}
console.log("Finished")

var cities = ["New York", "Minnesota","Hannover", "Berlin"]

for(let i=0;i<cities.length;i++){
    console.log(cities[i])
}

//while loop
var i=1;
while(i<10){
    console.log(i);
    i++;
}

//do while loop
var i=1;
do{
    console.log(i)
}while(i>10);


//foreach loop
var cities2 = ["New York", "Minnesota","Hannover", "Berlin"]

cities2.forEach(function(city){
    console.log(city)
})
