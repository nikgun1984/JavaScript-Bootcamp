console.log(3+5);
console.error('OH NO!!!');

if(1===1){
    console.log('It\'s true');
}

// Example 2

let rating = 5;

if (rating === 3){
    console.log('You are super star');
} else if (rating === 2){
    console.log('Meets expectations')
} else if(rating === 1){
    console.log('needs improvement')
} else {
    console.log('Whats wrong with you???')
}
// Example 2
let num = 37;

if (num%2 !== 0){
    console.log('Number is odd')
}

// Example3 yes or no

let highScore = 1430;
let userScore = 1200;

if(userScore > highScore){
    console.log(`Congrats you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Your score ${userScore} was not greater than ${highScore}`);
}

// Example 4

let password = 'Kitty';
if(password.length >=6) {
    if(password.indexOf(' ') === -1){
        console.log('Valid Password');
    } else {
        console.log('Password is long enough, but cannot contain spaces')
    }
} else {
    console.log('Password must be longer')
}