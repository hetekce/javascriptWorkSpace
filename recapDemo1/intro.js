var num1 = Number(prompt("Please enter a number : "))
var num2 = Number(prompt("Please enter a number : "))
var result = num1+num2
console.log(result)

var name = "Emre";
if(name==="Emre"){
    alert("name" + name )
}else{
    alert("name bulunamadı")
}

function selamVer(){
    console.log("Hello")
}
selamVer();


var numbers = [0,1,2,3,4,5,6];
console.log(numbers[0])

var cities = ["Ankara", "İstanbul", "İzmiri"]

var aray = ["Ankara", 2, true];


var functionarray = [function selamVer1(){
    console.log("First function")}, function selamVer2(){console.log("Second function")}]

functionarray[1]()


var sehirler = ["Ankara", "İstanbul", "izmir","Adana"]

sehirler.pop() //en sonuncu elemanı çeker ve siler listeden
sehirler
sehirler.shift() //ilk elemanı çeker ve siler listeden
sehirler
sehirler.push("Bursa") //sona eleman ekler ve kaydeder listeye
sehirler
sehirler.concat(["Mus","Van"]) //iki diziyi birleştirir ama kaydetmez
sehirler
sehirler.sort() //sıralar listeyi
sehirler.length //dizinin boyutunu veren attribute

var person = {   //create an object
    name:"Emre",
    surname :"Tekce",
    age :30,
    email: "emretekce@gmail.com",
    friends: ["Mustafa", "Yusuf","İsmail","Süleyman"],
    func: function(){
        console.log("Function works inside an object");
    }
}
console.log(person.age)
person.name ="Mustafa"
console.log(person.name)
person.func()

