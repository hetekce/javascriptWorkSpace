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

function enter(){
    if((email==users[0].email &&password ==users[0].sifre)||
        (email==users[1].email&&password==users[1].sifre)){
        console.log(tweets)
    }
    else{
        console.log("Username or password wrong")
    }
}

enter()