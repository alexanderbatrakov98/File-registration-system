
## Russian:

# Система регистрации для сервера GTA Connected

## Основные функции

- **Загрузка текстовых файлов:** Используется функция [loadTextFile](https://wiki.gtaconnected.com/loadTextFile).
- **Сохранение текстовых файлов:** Используется функция [saveTextFile](https://wiki.gtaconnected.com/saveTextFile).

## Установка

Следуйте этим шагам, чтобы настроить систему на своем сервере:

1. Создайте папку `server\functions` в корневой директории вашего сервера.

2. Переместите файлы `auth.js` и `main.js` в папку `functions`.

3. Отредактируйте файл `meta.xml` в корневой директории сервера, добавив следующие строки:

   ```xml
   <script src="./server/functions/auth.js" type="server" language="javascript" />
   <script src="./server/functions/main.js" type="server" language="javascript" />

4. Вам останется реализовать логику камеры в исходнике main.js и в исходнике auth.js логику spawn

   

## English:

# Server registration system GTA Connected

## Main functions

- **Uploading text files:** Function used [loadTextFile](https://wiki.gtaconnected.com/loadTextFile).
- **Saving text files:** Function used [saveTextFile](https://wiki.gtaconnected.com/saveTextFile).

## Setup

Follow these steps to set up the system on your server:

1. Create folder `server\functions` in the root directory of your server.

2. Move the files `auth.js` and `main.js` in folder `functions`.

3. Edit the file `meta.xml` in the server root directory by adding the following lines:

   ```xml
   <script src="./server/functions/auth.js" type="server" language="javascript" />
   <script src="./server/functions/main.js" type="server" language="javascript" />

4. All you have to do is implement the camera logic in the main.js source and the spawn logic in the auth.js source
