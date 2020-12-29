function getRandomInt(){
    return((Math.floor(Math.random()*6))+1);
}
var randomNumber1 = getRandomInt();
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = getRandomInt()
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent="🥇player1 wins"
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="player2 wins🥇"
}
else{
    document.querySelector("h1").textContent="draw"
}
