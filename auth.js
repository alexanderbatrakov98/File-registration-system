
function registerUser(client, username, password) {
    const filePath = 'users.txt';
    let data = loadTextFile(filePath);
    let users = data ? JSON.parse(data) : [];

    if (users.some(user => user.username === username)) {
        messageClient('Имя пользователя уже занято!' ,client,MessageColour);
        return;
    }

    users.push({ username: username, password: password });

    saveTextFile(filePath, JSON.stringify(users));
    messageClient('Пользователь успешно зарегистрирован.' ,client,MessageColour);
    players[client.id].loggedIn = true;
    //Останется реализовать логику спавна. Используйте эту функцию https://wiki.gtaconnected.com/spawnPlayer
}

function loginUser(client, username, password) {
    const filePath = 'users.txt';
    let data = loadTextFile(filePath);
    if (data === null) {
        messageClient('Пользователь не найден!' ,client,MessageColour);
        return;
    }
    let users = JSON.parse(data);
    if (users.some(user => user.username === username && user.password === password)) {
        messageClient('Авторизация прошла успешно.' ,client,MessageColour);
        players[client.id].loggedIn = true; 
        //Останется реализовать логику спавна. Используйте эту функцию https://wiki.gtaconnected.com/spawnPlayer
    }   else    {    messageClient('Неправильное имя пользователя или пароль!' ,client,MessageColour);   }
}

module.exports = {
    registerUser,
    loginUser
};
