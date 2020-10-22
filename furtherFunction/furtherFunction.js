var helloFunction = function hello(){
    console.log("Hello ");
}
//hello(); //Bu şekilde çağrılamaz artık çünkü bunu bir değişkene atadık!!!!
helloFunction(); //it can be so invoked

//aşağıdaki de ileri seviyede fonksiyon çağırma syntax'ıdır!!!
const helloFunction2 = ()=>{
    console.log("Hello 2");
}
helloFunction2();

//aslında aşağıdaki gibi de yazabiliyoruz eğer tek satır içerik yazmak istiyorsak.
const helloFunction3 = ()=>console.log("Hello 3");
helloFunction3();

//parametre de gönderebiliyoruz.
const helloFunction4 = (message,name)=>{
    console.log(message+name);
}
helloFunction4("Hello 4"," Emre");

//bu şekilde return de edilebilir.
const helloFunction5 = (num1,num2)=>{
    return num1+num2;
}
let total = helloFunction5(5,7);
console.log("Total of the numbers : "+total);


//further arrays
const firstArray = [1,2,3,4];
const squaredArray = [];

//foreach ile bu şekilde squared array oluşturulabiliyor...
firstArray.forEach(num=>{
    squaredArray.push(num*num);
})
console.log(squaredArray);

//map
//mapping yapılarak yeni dizi aynı şekilde oluşturulabiliyor.
//mapping yaparken tek satırda işlemi gerçekleştirmeliyiz!!!!.
const mapArray = firstArray.map(num=>num*3)
console.log(mapArray);


//filter : filtreleme işlemi kolay bir şekilde yapılabilir.
const  filterArray = firstArray.filter(num=>num>2) //sadece 3 ile 4 gelir!!!
console.log(filterArray);

//reduce ile cumulative toplama işlemi yapılır.
//acc : başlangıç değeri, default 0 değeridir.
const sum = firstArray.reduce((acc,num)=>{
    return acc + num;
},10) //acc değeri default almasını istemiyorsak buraya istediğimiz başlangıç değerini yazarız.

console.log(sum) //doğal olarak bu işlemin sonucu 20 olur. (10+1+2+3+4 =20)







