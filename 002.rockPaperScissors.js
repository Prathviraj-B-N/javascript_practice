//use cheat code [input : bomb] , to always win against evil computer 😉

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
    if(userInput == 'bomb'){
      console.log('Cheat Activated')
      return 'bomb'
    }
    
    return userInput;
  }
  else{
    console.log('Error: Invalid Input!');
  }
}


const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);

  if(num === 0 ){
     
    return 'rock';
  }else if(num === 1){
    
    return 'paper';
  }
  else{
    
    return 'scissors';
  }
}


function determineWinner(userChoice, computerChoice){
  //cheat code
    if(userChoice === 'bomb'){
      if(computerChoice === 'rock'){
        userChoice = 'paper'
      }
      else if(computerChoice === 'paper'){
        userChoice = 'scissors'
      }
      else{
        userChoice = 'rock'
      }
    }
    console.log('Your choice: '+ userChoice)
    console.log('Computer\'s choice : '+ computerChoice)
    
    //usual code
    if(userChoice === computerChoice){
      console.log('It\'s a Tie');
      return;
    }
    else{
      if(userChoice === 'rock'){
          if(computerChoice === 'paper'){
            console.log('Computer won!')
          }else if(computerChoice === 'scissors'){
            console.log('You won!')
          }
      }
      else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            console.log('Computer won!')
          }else if(computerChoice === 'rock'){
            console.log('You won!')
          }
      }
      else{
        if(computerChoice === 'stone'){
            console.log('Computer won!')
          }else if(computerChoice === 'paper'){
            console.log('You won!')
          }
      }

    }
}


function playGame(){

  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  determineWinner(userChoice,computerChoice);
}

playGame()

