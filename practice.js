let max = prompt("Enter MAX number");


const random = Math.floor(Math.random()*max)+1;
console.log(random);
let guess = prompt("guess the number");

while(true){
    if(guess=='quit'){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("WOW you are right..:)",random);
        break;
    }else if(guess < random){
        guess = prompt("your guess is low");
    }else{
        guess=prompt("Your guess is too high");
    }
}