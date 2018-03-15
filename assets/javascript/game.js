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
                for (var i = 0; i < 12; i++)
                {
                    if (wrongGuesses.indexOf(userGuess) === -1)
                    {
                        wrongGuesses.push(userGuess);
                        guessesLeft--;
                        document.getElementById("wrongGuesses").textContent = wrongGuesses;
                        document.getElementById("guessesRemeiningNumber").textContent = guessesLeft;
                    }
                }

                
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





