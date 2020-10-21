var users = [
    {email:"exqual@gmail.com", sifre:"1234"},
    {email:"emre@gmail.com", sifre:"789"}
]

var tweets = [
    {email:"exqual@gmail.com", tweet:"It's really nice today 1"},
    {email:"exqual@gmail.com", sifre:"It's really nice today 2"},
    {email:"emre@gmail.com", sifre:"I'll open the door"}
]

var email= prompt("email?")
var password= prompt("password?")

function isUserValid(email,password){
    for(let i=0;i<users.length;i++){
        if(users[i].email==email && users[i].sifre==password){
            return true;
        }
    }
    return false;
}
function enter(){
    if(isUserValid(email,password)){
        console.log("You logged in successfullyc")
        console.log(tweets)
    }
    else{
        console.log("Username or password wrong")
    }
}

enter()