class Game {

    name : string;
    price : number;
    description : string;
    expirationDate : Date;
}

window.onload = function() {
    let addGameBtn = document.querySelector("#submit_game") as HTMLButtonElement;
    addGameBtn.onclick =  processGame;
}

function processGame() {
    let userGame = getGame();
    if (userGame != null) {
        addGame(userGame);
    }
}


function getGame():Game {
    cleasrAllErrorMessages();

    let nameTextBox = document.querySelector("#name") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let descriptionTextBOx = document.querySelector("#description") as HTMLInputElement;
    let expirationDateTextBox = document.querySelector("#expiration_date") as HTMLInputElement;

    let IsValidDate:boolean = true;

    let name:string = nameTextBox.value;
    if (name.trim() == ""){
        IsValidDate = false;
        let nameErrorSpan = nameTextBox.nextElementSibling;
        nameErrorSpan.textContent = "You must provide a name of the game";

    }
}

function addGame(g:Game):void{
    alert("Data was valid, game added");
}