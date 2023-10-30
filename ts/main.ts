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

    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0){
        IsValidDate = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }

    let description = descriptionTextBOx.value;
    if (description.trim() == ""){
        IsValidDate = false;
        descriptionTextBOx.nextElementSibling.textContent = "You must provide a description of the game";

    }

    let expirationDate = expirationDateTextBox.value;
    let expirationDateCheck = Date.parse(expirationDate);
    if (isNaN(expirationDateCheck)) {
        IsValidDate = false;
        expirationDateTextBox.nextElementSibling.textContent = "Expiration date must be a valid date";
    }
}

function addGame(g:Game):void{
    alert("Data was valid, game added");
}