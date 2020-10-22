//click
var salih = document.getElementById("Merve").addEventListener("click",changeColor);
function changeColor(){
    document.getElementById("div1").style.color="red";
    var nameList = document.getElementsByName("customerName");
    nameList[0].value = "Mustafa Topal";
}

//mouseover
var salih = document.getElementById("Merve").addEventListener("mouseover",changeColor);
function changeColor(){
    document.getElementById("div1").style.color="red";
    var nameList = document.getElementsByName("customerName");
    nameList[0].value = "Mustafa Topal";
}

//mouseover and mouseout
var elem = document.getElementById('Eingabe');
var ausgabe = document.getElementById('Ausgabe');
elem.addEventListener('mouseover', mouseOver);
elem.addEventListener('mouseout', mouseOut);

function mouseOver() {
    ausgabe.innerHTML = 'Ich bin dynamisch!';
    elem.innerHTML = 'Drüber!';
}

function mouseOut() {
    ausgabe.innerHTML = ' ';
    elem.innerHTML = 'Wieder weg!';
}

//using Nodes, creating and inserting tags
var node = document.getElementById("tree");
alert(node.childNodes[0].nodeValue);

var title = document.createElement("h2"); //h2 tagi oluşturduk
var node = document.createTextNode("Hello Java Script"); //node elementi oluşturduk
title.appendChild(node) //tag içerisine node eklendi


var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")
div1.insertBefore(title,p2) //div1 blığu içerisine p2'den önce oluşturduğumuz title tag'ini ekliyoruz.

//remove tags from blocks
alert("p2 siliniyor")
div1.removeChild(p2); //div1 bloğundan p2 tag'ını siliyoruz.


//replacechild
alert("Değiştiriliyor");
var p1 = document.getElementById("p1")
div1.replaceChild(title,p1); //div1 bloğunda p1 tag'ı yerine title tag'ını replace et.