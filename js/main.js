class Game {
}
window.onload = function () {
    let addGameBtn = document.querySelector("#submit_game");
    addGameBtn.onclick = processGame;
};
function processGame() {
    let userGame = getGame();
    if (userGame != null) {
        addGame(userGame);
    }
}
function getGame() {
    cleasrAllErrorMessages();
    let nameTextBox = document.querySelector("#name");
    let priceTextBox = document.querySelector("#price");
    let descriptionTextBOx = document.querySelector("#description");
    let expirationDateTextBox = document.querySelector("#expiration_date");
    let IsValidDate = true;
    let name = nameTextBox.value;
    if (name.trim() == "") {
        IsValidDate = false;
        let nameErrorSpan = nameTextBox.nextElementSibling;
        nameErrorSpan.textContent = "You must provide a name of the game";
    }
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        IsValidDate = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }
    let description = descriptionTextBOx.value;
    if (description.trim() == "") {
        IsValidDate = false;
        descriptionTextBOx.nextElementSibling.textContent = "You must provide a description of the game";
    }
    let expirationDate = expirationDateTextBox.value;
    let expirationDateCheck = Date.parse(expirationDate);
    if (isNaN(expirationDateCheck)) {
        IsValidDate = false;
        expirationDateTextBox.nextElementSibling.textContent = "Expiration date must be a valid date";
    }
    if (IsValidDate) {
        let addedGame = new Game();
        addedGame.name = name;
        addedGame.price = price;
        addedGame.description = description;
        addedGame.expirationDate = new Date(expirationDate);
        return addedGame;
    }
    return null;
}
function addGame(g) {
    alert("Data was valid, game added");
}
function cleasrAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error_msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
