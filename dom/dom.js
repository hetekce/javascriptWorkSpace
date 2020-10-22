//herhangi bir ID ismi üzerinden işlem yapmak için:
document.getElementById("bio").innerHTML = "Emre Tekce: 1990";

var intro1 = document.getElementById("intro1");
var message = document.getElementById("message");
message.innerHTML =intro1.innerHTML; //burada message değeri, intro1 değerini alır.


//herhangi bir ID verilmeden Tag üzerinden işlem yapmak için:
var allLists = document.getElementsByTagName("ul"); //tüm ul tag'ını içeren elemanları kaydeder.
var cities = allLists[0] //burada 0. index önümüze ilk çıkan ul tag'ını temsil ediyor.

var allElements = cities.getElementsByTagName("li"); //0. ul tag'ının içerisindeki tüm li elemanlarını temsil eder.

for(let i =0;i<allElements.length;i++){
    alert(allElements[i].innerHTML);
}


//herhangi bir class ismi üzerinden işlem yapmak için:
var classItems = document.getElementsByClassName("intro1"); //tüm intro1 ismindeki class'ları kaydeder.
alert(classItems[0].innerHTML); //first paragraph, 0.index önümüze ilk çıkan intro1 class'ı
alert(classItems[1].innerHTML); //value of tree, 1.index önümüze 2. sırada çıkan intro1 class'ı



//Query Selector
var queryElements =document.querySelectorAll("p.intro1"); //p tagının intro1 classlarrını kaydeder.
alert(queryElements.length)










