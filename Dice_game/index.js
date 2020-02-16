var randomnumber1= Math.floor(Math.random()*6)+1;

var randomdiceImage="dice"+randomnumber1+".png";

var radomImageSource= "images/"+ randomdiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", radomImageSource);

var randomnumber2= Math.floor(Math.random()*6)+1;
var randomdiceImage1 = "dice"+randomnumber2 +".png";
var randomImageSource1="images/"+ randomdiceImage1;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if (randomnumber2>randomnumber1){
        document.querySelector("h1").innerHTML="Player 2 Won";
}
else {
        document.querySelector("h1").innerHTML="It's a Draw"
}
