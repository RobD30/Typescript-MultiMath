function startGame() {
    var playerName = 'Red Queen';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement1.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.');
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map