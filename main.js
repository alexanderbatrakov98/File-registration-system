"use strict";

let players = {};

function despawnPlayer(client) {
	client.despawnPlayer();
}
addEventHandler("OnPlayerJoined", (event, client) => {
    despawnPlayer(client);
    //Остается реализовать логику камеры.
    players[client.id] = { loggedIn: false };
});
addCommandHandler("register", function(command, text, client) {
    let [username, password] = text.split(" ");
    if(players[client.id].loggedIn == true) {    messageClient('Вы уже зарегистрировались!' ,client,MessageColour);  }
    else if (username && password) {    registerUser(client, username, password);   } 
    else {  messageClient('Используйте: /register <username> <password>' ,client,MessageColour);    }
});

addCommandHandler("login", function(command, text, client) {
    let [username, password] = text.split(" ");
    if(players[client.id].loggedIn == true) {   messageClient('Вы уже авторизовались!' ,client,MessageColour);  }
    else if (username && password) {    loginUser(client, username, password);  } 
    else {  messageClient('Используйте: /login <username> <password>' ,client,MessageColour);   }
});
