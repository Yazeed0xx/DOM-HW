let image = document.getElementById("image")
image.onmouseover = function() {mouseOver()};
image.onmouseout = function() {mouseOut()};

let number = document.getElementById("numb");
number.onmouseover = function() {mouseOver()};
number.onmouseout = function() {mouseOut()};

let email = document.getElementById("email");
email.onmouseover = function() {mouseOver()};
email.onmouseout = function() {mouseOut()};

let web = document.getElementById("website")
web.onmouseover = function() {mouseOver()};
web.onmouseout = function() {mouseOut()};
let addres = document.getElementById("addres")
web.onmouseover = function() {mouseOver()};
web.onmouseout = function() {mouseOut()};
let summ = document.getElementById("my-summry")
summ.onmouseover = function() {mouseOver()};
summ.onmouseout = function() {mouseOut()};
let exp = document.getElementsByClassName("exp")[0]
exp.onmouseover = function() {mouseOver()};
exp.onmouseout = function() {mouseOut()};
let exp1 = document.getElementsByClassName("exp1")[0]
exp1.onmouseover = function() {mouseOver()};
exp1.onmouseout = function() {mouseOut()};
let exp2 = document.getElementsByClassName("exp2")[0]
exp2.onmouseover = function() {mouseOver()};
exp2.onmouseout = function() {mouseOut()};

let fot = document.getElementById("radir")
fot.onmouseover = function() {mouseOver()};
fot.onmouseout = function() {mouseOut()};

let phone = document.getElementsByClassName("phone")[0]
phone.onmouseover = function() {mouseOver()};
phone.onmouseout = function() {mouseOut()};

let eml = document.getElementById("eml");[0]
eml.onmouseover = function() {mouseOver()};
eml.onmouseout = function() {mouseOut()};

let it = document.getElementById("IT Support");
it.onmouseover = function() {mouseOver()};
it.onmouseout = function() {mouseOut()};
let it1 = document.getElementById("IT Support1");
it1.onmouseover = function() {mouseOver()};
it1.onmouseout = function() {mouseOut()};
let it2 = document.getElementById("IT Support2");
it2.onmouseover = function() {mouseOver()};
it2.onmouseout = function() {mouseOut()};
let it3 = document.getElementById("IT Supporte");
it3.onmouseover = function() {mouseOver()};
it3.onmouseout = function() {mouseOut()};









function mouseOver(){
    number.innerHTML ="0555555555"
    email.innerHTML ="Yazeed@gmail.com"
    web.innerHTML ="Yazeed.com"
    addres.innerHTML="Ryaidh"
    summ.innerHTML ="My name is Yazeed and im 23y old and i study at Tuwaiq acadeamy"
    place.innerHTML ="Tuwaiq Acadeamy"
    exp.innerHTML =`Deep knowledge of operating systems, current equipment and technologies, enterprise backup and recovery procedures, and system performance monitoring tools
    Excellent interpersonal skills`
    fot.innerHTML ="Github"
    exp1.innerHTML =`Deep knowledge of operating systems, current equipment and technologies, enterprise backup and recovery procedures, and system performance monitoring tools
    Excellent interpersonal skills`
    exp2.innerHTML =`Deep knowledge of operating systems, current equipment and technologies, enterprise backup and recovery procedures, and system performance monitoring tools
    Excellent interpersonal skills`
    image.src ="download.jpg"
    phone.innerHTML ="055555s55"
    eml.innerHTML ="Yazeed@gmail.com"

    it.innerHTML ="IT support"
    it1.innerHTML ="IT support"
    it2.innerHTML ="IT support"
    it3.innerHTML ="IT support"


    
    


}

function mouseOut(){
    number.innerHTML = "+123-456-789"
    email.innerHTML ="Hello@gmail.com"
    web.innerHTML ="www.com"
    addres.innerHTML="Addres"
    summ.innerHTML= `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem expedita harum consectetur iusto nostrum illo
    assumenda fugit. Itaque distinctio, veniam aut repellat facere optio
    nostrum accusantium expedita illo doloremque ducimus!`
    place.innerHTML ="USA uni"
    exp.innerHTML = `Marketing manager responsibilities include tracking and analyzing
    the performance of advertising campaigns, managing the marketing
    budget and ensuring that all marketing material is in line with
    our brand identity.`

    image.src ="pexels-photo-771742.jpeg"





}