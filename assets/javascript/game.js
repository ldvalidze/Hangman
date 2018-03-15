$(document).ready(function (){
    var words = ["nirvana","coldplay","metalica"];
    var userGuess;
    var guessesLeft = 12;
    var underscores = [];
    var wrongGuesses = [];
        
    function startGame()
    {
        //pick random word
        randomWord = words[Math.floor(Math.random()*words.length)];
        //push number of underscores
        for (var i = 0; i < randomWord.length; i++) 
        {
            underscores.push('_');    
        }
        document.getElementById("hiddenWord").textContent = underscores;
        
        document.onkeyup = function(event) 
        {
            userGuess = event.key;

            if (randomWord.indexOf(userGuess) > -1) 
            {
                for ( var i = 0; i < randomWord.length; i++) 
                {
                    if (randomWord[i]===userGuess) 
                    {
                        underscores[i]=userGuess;
                        document.getElementById("hiddenWord").textContent = underscores;
                    }
                }
            }
            else 
            {
                wrongGuesses.push(userGuess);
                guessesLeft--;
                document.getElementById("wrongGuesses").textContent = wrongGuesses;
                document.getElementById("guessesRemeiningNumber").textContent = guessesLeft;
            }
        } 
        
        //Got stuck here!!!!!!!!!
        function reset()
        {
            if (guessesLeft===0) {

            }
        }
    }

    
        
        
    



startGame();
})





    //get user input onkeyup.
    
    // for (var i=0; i <word.length; i++) {
    // document.onkeyup = function(event) {
        
    //     wrongGuesses.push(userGuess[i]);
    // }
    
    // //if guess is wrong, display letter in the wrong guesses
    // if (word.indexOf(userGuess) === -1) {
    //     var wrongGuesses = [];
    //     for (var i = 0; i < numGuesses; i++) {
    //     wrongGuesses.push(userGuess[i]);
    //     }
    //     console.log('letter aint there');
    //     console.log('Wrong Guesses :' + wrongGuesses)
    // }
    
    
    
    // //if guess is right, show the letter instead of dash
    // else {
    //     console.log('letter is there');
    //     //if guess is same as before, nothing happens
    
    // }
    
    
    
    // //define right/wrong guesses
    
    // };
    
    
    // //define wins & keep track of wins
    
    // });