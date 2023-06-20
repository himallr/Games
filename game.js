const games = [
    {
        name: "Flames",
        key: 0,
        img: "images/flames.png",
        linkto: "flames/flames.html",
    },
    {
        name: "Simon Game",
        key: 1,
        img: "images/simon.png",
        linkto: "Simon_Game/index.html",
    },
    {
        name: "Dice Challenge",
        key: 2,
        img: "images/dice.png",
        linkto: "Dice_Challenge/html.html",
    },
    {
        name: "Drum Kit",
        key: 3,
        img: "images/drum.png",
        linkto: "Drum/index.html",
    },
];


function Games() {

    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    let marked_checkboxes = [];
    let options = ['flames/flames.html', 'Simon_Game/simon.html', 'Dice_Challenge/html.html', 'Drum/drum.html'];
    checkbox.forEach((check_box, index) => {
        if (check_box.checked) {
            window.location.href = options[index];
        }
    });
}

function Game() {

    const variable = document.getElementById("search").value;

    if (variable == "flames") {
        window.location.href = games[0].linkto;
    }
    else if (variable == "simon" || variable == "simon game") {
        window.location.href = games[1].linkto;
    }
    else if (variable == "dice") {
        window.location.href = games[2].linkto;
    }
    else if (variable == "drumkit" || variable == "drum") {
        window.location.href = games[3].linkto;
    }
}