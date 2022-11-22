const generateCards = require('./generateCards');
const fs = require('fs');

function generateHtml(teamArray) {
    const cardsArray = generateCards(teamArray);
    const cardsHtml = cardsArray.join("");

    const html = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/assets/css/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/48a7f32bdc.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${cardsHtml}
        </main>
    </body>
</html>
`;  

    fs.writeFile("index.html", html, (error) => {
        if(error){
            return console.log(error);
        }
        console.log("File written successfully!")
    });
}

module.exports = generateHtml;
