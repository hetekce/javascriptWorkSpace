//var keyword
var num = 10;
var city ="New York";

num = 11;
city = "Rize";

var city ="Adana"; //js'de önceden 'var' olarak tanımlanan variable tekrardan başka yerde tanımlanabiliyor.

//let keyword
let city2 = "Ankara";
city2 ="Bursa";

//let city2 = "Trabzon"; //bu kod çalışmaz. 'let' olarak tanımlanana variable unique olarak tanımlanabilir!!!

var name2="Mülayim";
function giveMessage(){
    var name="Emre"; //bu fonksiyon dışarısından okunmaz. Çünkü fonksiyon içerisinde ilk tanımlandı.
    console.log(name);
    console.log(name2);
    name2="ismail"; //bu değişiklik function dışarısından da izlenebilir çünkü ilk olarak function dışarısında tanımlandı.
    console.log(city);
}
giveMessage();
//console.log(name); bu kod çalışmaz!!!!
console.log(name2); //ismail olarak çıkar!!!
console.log(num);
console.log(city);
console.log(city2)

/*// var let difference in loops!
for(let i=0;i<10;i++){
    //for içerisinde i let olarak tanımlanırsa block dışarısından i' ye erişilemez.
}
console.log(i);  //erişilemez!!!!!!

for(var i=0;i<10;i++){
    //for içerisinde i var olarak tanımlanırsa block dışarısından i' ye erişilir!!!
}
console.log(i);  //erişilir!!!!!! sonuç 10!!!*/


//const variable
//const ile variable bir kez oluşturulduğu zaman başka bir şekilde assign gerçekleştirilemez.
const surname = "Tekce";
//surname = "Mustafa"; //Bu işlem gerçekleşmez!!!!
console.log(surname);

const cities = ["Ankara", "İstanbul"];
cities.push("izmir"); //Bu işlem gerçekleşir çünkü yeni eleman ekleniyor. Reference tip sabit!!!
//cities = ["Bursa", "İzmir"]; //Bu işlem gerçekleşmez. Çünkü referans code değiştirilemez!!!











