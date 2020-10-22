//class creation
class Personal{
    //constructor oluşturulma öncesinden name ve surname tanımlaması yapılmaz!!!!!!
    constructor(name,surname){ //constructor bu şekilde oluşturulur.
        this.name = name;
        this.surname = surname;
    }

    save(){
        console.log("Personal saved:" +this.name);
        //Bu işaret için altgr+comma(,) tuşuna basılır sonra boşluk bırakılır: ( `)
        console.log(`Personal saved: ${this.name}`) //bu kullanım daha şık!!!
    }
}
//create an object from a class
const personal =new Personal("Emre","Tekce");
personal.save();
console.log(personal.name +" "+ personal.surname);

personal.name = "Mustafa"; //bu şekilde isim tekrar değişebilir.
console.log(personal.name);


